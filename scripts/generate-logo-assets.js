/**
 * Pravi PWA ikone i osvežava logo.webp: krem pozadina (#f3f2ee), više „zraka“ za maskable,
 * blago pojačanje kontrasta (grb je bio slabo vidljiv na crnoj pozadini pri otvaranju aplikacije).
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC = path.join(__dirname, '..', 'public');
const SRC_MASTER = path.join(PUBLIC, 'logo-grb-izvor.webp');
const SRC_FALLBACK = path.join(PUBLIC, 'logo.webp');
const BG = { r: 243, g: 242, b: 238 };

function compositeSquare(canvasSize, innerRatio, srcBuffer) {
  const innerMax = Math.round(canvasSize * innerRatio);
  return sharp(srcBuffer)
    .resize({
      width: innerMax,
      height: innerMax,
      fit: 'inside',
      withoutEnlargement: false,
    })
    .modulate({ brightness: 1.14, saturation: 1.06 })
    .sharpen({ sigma: 0.45 })
    .toBuffer()
    .then((resized) =>
      sharp({
        create: {
          width: canvasSize,
          height: canvasSize,
          channels: 3,
          background: BG,
        },
      })
        .composite([{ input: resized, gravity: 'center' }])
        .webp({ quality: 92 }),
    );
}

async function main() {
  if (!fs.existsSync(SRC_MASTER)) {
    if (!fs.existsSync(SRC_FALLBACK)) {
      throw new Error(`Nedostaje izvor: dodaj public/logo-grb-izvor.webp ili privremeno public/logo.webp`);
    }
    await fs.promises.copyFile(SRC_FALLBACK, SRC_MASTER);
    console.log('Kreiran logo-grb-izvor.webp (jednokratna kopija izvornog grba – koristi ga za ponovno generisanje).');
  }
  const srcBuffer = await fs.promises.readFile(SRC_MASTER);

  const out512 = await compositeSquare(512, 0.5, srcBuffer);
  await out512.toFile(path.join(PUBLIC, 'pwa-icon-512.webp'));
  const out192 = await compositeSquare(192, 0.5, srcBuffer);
  await out192.toFile(path.join(PUBLIC, 'pwa-icon-192.webp'));
  const out180 = await compositeSquare(180, 0.5, srcBuffer);
  await out180.toFile(path.join(PUBLIC, 'pwa-icon-180.webp'));
  const outLogo = await compositeSquare(256, 0.86, srcBuffer);
  await outLogo.toFile(path.join(PUBLIC, 'logo.webp'));

  console.log('Gotovo: pwa-icon-512.webp, pwa-icon-192.webp, pwa-icon-180.webp, logo.webp');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
