/* eslint-disable @typescript-eslint/no-require-imports */

// Simple script to create a basic PNG for Open Graph
const fs = require('fs');
const path = require('path');

// Create a minimal PNG file (this is a basic 1x1 transparent PNG)
// In a real scenario, you'd use a library like sharp or canvas
const pngData = Buffer.from([
  0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
  0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52, // IHDR chunk
  0x00, 0x00, 0x04, 0xB0, 0x00, 0x00, 0x02, 0x76, // 1200x630 dimensions
  0x08, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 8-bit RGB, no compression
  0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, // IEND chunk
  0xAE, 0x42, 0x60, 0x82
]);

// Write to public directory
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'og-image.png'), pngData);
console.log('Created og-image.png in public directory');

// Clean up the SVG file
fs.unlinkSync(path.join(__dirname, 'og-image.svg'));
console.log('Cleaned up temporary SVG file');
