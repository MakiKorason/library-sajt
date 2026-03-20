const fs = require('fs');
const path = require('path');

// imagemin v9+ i pluginovi su ESM; koristimo dinamički import u CommonJS okruženju
const loadImagemin = async () => {
  const { default: imagemin } = await import('imagemin');
  const { default: imageminWebp } = await import('imagemin-webp');
  const { default: imageminMozjpeg } = await import('imagemin-mozjpeg');
  const { default: imageminPngquant } = await import('imagemin-pngquant');
  return { imagemin, imageminWebp, imageminMozjpeg, imageminPngquant };
};

const optimizeImages = async () => {
  try {
    const inputPath = process.argv[2];
    const qualityArg = process.argv[3];
    const quality = qualityArg ? parseInt(qualityArg, 10) : 80;

    const { imagemin, imageminWebp, imageminMozjpeg, imageminPngquant } = await loadImagemin();

    if (inputPath) {
      const ext = path.extname(inputPath).toLowerCase();
      const dir = path.dirname(inputPath);
      const base = path.basename(inputPath);

      console.log(`🔄 Optimizujem jednu sliku: ${base} (quality=${quality})`);

      const plugins = [];
      if (ext === '.jpg' || ext === '.jpeg') {
        plugins.push(imageminMozjpeg({ quality }));
      } else if (ext === '.png') {
        plugins.push(imageminPngquant({ quality: [Math.max(0, (quality - 20) / 100), Math.min(1, quality / 100)] }));
      }

      // Ne menjamo ekstenziju; zapisujemo optimizovan fajl u isti folder
      await imagemin([inputPath], {
        destination: dir,
        plugins
      });

      console.log(`✅ Optimizovano: ${base}`);
      return;
    }

    console.log('🔄 Optimizujem slike u src/images i public...');
    
    // Optimizuj slike iz src/images
    const srcImages = await imagemin(['src/images/*.{jpg,jpeg,png}'], {
      destination: 'src/images/optimized',
      plugins: [
        imageminMozjpeg({ quality }),
        imageminPngquant({ quality: [Math.max(0, (quality - 20) / 100), Math.min(1, quality / 100)] }),
        imageminWebp({ quality })
      ]
    });

    // Optimizuj slike iz public
    const publicImages = await imagemin(['public/*.{jpg,jpeg,png}'], {
      destination: 'public/optimized',
      plugins: [
        imageminMozjpeg({ quality }),
        imageminPngquant({ quality: [Math.max(0, (quality - 20) / 100), Math.min(1, quality / 100)] }),
        imageminWebp({ quality })
      ]
    });

    console.log(`✅ Optimizovano ${srcImages.length + publicImages.length} slika`);
    
    // Kreiraj optimized direktorijume ako ne postoje
    if (!fs.existsSync('src/images/optimized')) {
      fs.mkdirSync('src/images/optimized', { recursive: true });
    }
    if (!fs.existsSync('public/optimized')) {
      fs.mkdirSync('public/optimized', { recursive: true });
    }

  } catch (error) {
    console.error('❌ Greška pri optimizaciji slika:', error);
  }
};

optimizeImages(); 