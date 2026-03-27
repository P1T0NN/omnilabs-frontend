#!/usr/bin/env node
/**
 * Optimizes images under static/home and creates responsive WebP versions.
 * Run: node scripts/optimize-images.mjs
 * Add to package.json: "optimize-images": "node scripts/optimize-images.mjs"
 */
import sharp from 'sharp';
import { mkdir, readdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATIC = join(__dirname, '..', 'static');
const HOME_DIR = join(STATIC, 'home');
const OPT_DIR = join(HOME_DIR, 'opt');

// Work section grid images: responsive widths
const GRID_SIZES = [640, 960, 1280];

const IMAGE_EXT = /\.(png|jpg|jpeg|webp)$/i;

async function ensureDir(p) {
	await mkdir(p, { recursive: true });
}

async function optimizeImage(file) {
	const src = join(HOME_DIR, file);
	if (!existsSync(src)) return;

	const baseName = file.replace(IMAGE_EXT, '');
	const outDir = OPT_DIR;
	await ensureDir(outDir);

	for (const w of GRID_SIZES) {
		await sharp(src)
			.trim() // Remove padding
			.resize(w)
			.webp({ quality: 75 })
			.toFile(join(outDir, `${baseName}-${w}w.webp`));
	}
	console.log(`✓ ${file}`);
}

async function main() {
	try {
		if (!existsSync(HOME_DIR)) {
			console.warn('⊘ static/home not found');
			process.exit(0);
			return;
		}

		const files = await readdir(HOME_DIR);
		const images = files.filter((f) => IMAGE_EXT.test(f) && !f.startsWith('.'));

		if (images.length === 0) {
			console.warn('⊘ No images found in static/home');
			process.exit(0);
			return;
		}

		console.log('Optimizing images in static/home...\n');

		for (const file of images) {
			await optimizeImage(file);
		}

		console.log('\nDone! Optimized WebPs in static/home/opt/');
	} catch (err) {
		console.error('Error:', err.message);
		process.exit(1);
	}
}

main();
