import sharp from 'sharp';
import { mkdir, stat, writeFile } from 'node:fs/promises';
const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/optimize-assets.mjs <asset-directory> [reference-directory]');
await mkdir('public/images', { recursive: true });
const names = ['heroImage', 'whyNerho1', 'whyNerho2', 'whyNerho3', 'serviceImg1', 'serviceImg2', 'serviceImg4', 'serviceImg5', 'serviceImg6', 'serviceImg7', 'serviceImg8', 'payWithParthner', 'payWithZero', 'payNow', 'nerhoLogo'];
let before = 0, after = 0;
const dimensions = {};
for (const name of names) {
  const input = `${source}/${name}.png`;
  before += (await stat(input)).size;
  const metadata = await sharp(input).metadata();
  dimensions[name] = { width: metadata.width, height: metadata.height };
  const widths = name === 'nerhoLogo' ? [metadata.width] : name === 'heroImage' ? [360, metadata.width] : [240, metadata.width];
  for (const width of [...new Set(widths)]) {
    const output = `public/images/${name}${width === metadata.width ? '' : `-${width}`}.webp`;
    await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82, alphaQuality: 95, effort: 6 }).toFile(output);
    after += (await stat(output)).size;
  }
}
await writeFile('src/asset-dimensions.json', JSON.stringify(dimensions, null, 2) + '\n');
if (process.argv[3]) {
  // The reference supplies the exact essentials photo and customer portraits.
  // Coordinates exclude Figma controls and preserve the design's original artwork.
  const refs = process.argv[3];
  await sharp(`${refs}/Screenshot 2026-10-12 at 12.30.33 PM.png`).extract({ left: 1501, top: 296, width: 619, height: 637 }).webp({ quality: 85 }).toFile('public/images/essentials.webp');
  await sharp(`${refs}/Screenshot 2026-10-12 at 12.30.25 PM.png`).extract({ left: 727, top: 819, width: 170, height: 59 }).webp({ quality: 85 }).toFile('public/images/customers.webp');
}
console.log(`Original assets: ${(before / 1024).toFixed(0)} KB; all WebP variants: ${(after / 1024).toFixed(0)} KB`);

// Contact page location photos, when supplied in the asset directory.
for (const name of ['otokutu', 'asaba']) {
  const input = `${source}/${name}.jpg`;
  const exists = await stat(input).catch(() => null);
  if (!exists) continue;
  for (const width of [480, 848]) {
    await sharp(input).resize({ width, height: Math.round(width * 456 / 424), fit: 'cover' })
      .webp({ quality: 82, effort: 6 })
      .toFile(`public/images/${name}${width === 480 ? '-480' : ''}.webp`);
  }
}
