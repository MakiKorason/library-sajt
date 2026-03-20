const { override, addWebpackPlugin } = require('customize-cra');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override(
  // Dodaj kompresiju
  addWebpackPlugin(
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    })
  ),
  
  // Optimizuj Terser i dodaj fallback-ove
  (config) => {
    // Enable source maps for production builds - use 'source-map' for all chunks
    if (process.env.NODE_ENV === 'production') {
      config.devtool = 'source-map';
      // Ensure source maps are generated for all chunks
      config.output = {
        ...config.output,
        sourceMapFilename: '[file].map',
      };
      
      // Ensure source maps are generated for all modules including node_modules
      config.module = {
        ...config.module,
        rules: config.module.rules.map(rule => {
          if (rule.oneOf) {
            return {
              ...rule,
              oneOf: rule.oneOf.map(oneOfRule => {
                if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
                  return {
                    ...oneOfRule,
                    use: oneOfRule.use.map(useItem => {
                      if (typeof useItem === 'object' && useItem.loader && useItem.loader.includes('babel-loader')) {
                        return {
                          ...useItem,
                          options: {
                            ...useItem.options,
                            sourceMaps: true,
                          },
                        };
                      }
                      return useItem;
                    }),
                  };
                }
                return oneOfRule;
              }),
            };
          }
          return rule;
        }),
      };
    }
    
    // Dodaj fallback-ove za Node.js module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/")
    };
    
    // Optimizuj Terser
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer instanceof TerserPlugin) {
          minimizer.options = {
            ...minimizer.options,
            sourceMap: true,
            terserOptions: {
              ...minimizer.options.terserOptions,
              sourceMap: {
                ...(minimizer.options.terserOptions?.sourceMap || {}),
                includeSources: true,
              },
              compress: {
                ...(minimizer.options.terserOptions?.compress || {}),
                drop_console: true,
                drop_debugger: true,
              },
            },
          };
        }
      });
    }
    
    // Optimizuj splitChunks
    if (config.optimization) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
          // Separate CSS chunks for better caching
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      };
      
      // Ensure source maps are generated for all chunks
      if (process.env.NODE_ENV === 'production') {
        config.optimization.moduleIds = 'deterministic';
        config.optimization.chunkIds = 'deterministic';
      }
    }
    
    // Optimize CSS extraction and minimize
    if (config.plugins) {
      config.plugins.forEach((plugin) => {
        // Ensure CSS is minified and has source maps
        if (plugin.constructor.name === 'MiniCssExtractPlugin') {
          plugin.options = {
            ...plugin.options,
            ignoreOrder: true,
          };
        }
      });
    }
    
    // Ensure all loaders generate source maps in production
    if (process.env.NODE_ENV === 'production') {
      // Add source map support for CSS loaders
      if (config.module && config.module.rules) {
        config.module.rules.forEach(rule => {
          if (rule.test && rule.test.toString().includes('css')) {
            if (rule.use) {
              rule.use.forEach(useItem => {
                if (typeof useItem === 'object' && useItem.loader) {
                  useItem.options = {
                    ...(useItem.options || {}),
                    sourceMap: true,
                  };
                }
              });
            }
          }
        });
      }
    }
    
    return config;
  }
);
