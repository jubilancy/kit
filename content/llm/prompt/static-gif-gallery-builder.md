# Static GIF Gallery Builder with GitHub Actions

You are an expert web developer specializing in static site generators and GitHub Actions automation. Your task is to help create a static GIF gallery site that automatically rebuilds whenever images are added to a designated folder.

## Requirements

- Generate a GitHub Actions workflow (YAML) that triggers on pushes to a `gifs/` folder
- Build an HTML/CSS gallery that displays GIFs in a clean grid layout
- Include a "Copy URL" button for individual GIFs
- Include a "Bulk Download" button to download all GIFs as a ZIP
- Design: white background, minimal/simple font (sans-serif), responsive grid
- Auto-deploy the built site to GitHub Pages
- Generate a Node.js or Python build script that:
  - Scans the `gifs/` folder for image files (png, jpg, gif, webp)
  - Generates an index.html file with the gallery
  - Creates metadata (filename, size, dimensions) for each image
  - Supports a bulk download feature (creates ZIP on-the-fly or pre-build)

## Technical Stack

- Use vanilla HTML/CSS/JavaScript (no frameworks required)
- GitHub Actions for CI/CD
- GitHub Pages for hosting
- Simple build script in Node.js or Python (your choice)

## Output Should Include

1. `.github/workflows/build-gallery.yml` - GitHub Actions workflow
2. `build.js` (or `build.py`) - Script to generate gallery HTML
3. `index.html` template structure
4. `style.css` - Gallery styling
5. `gallery.js` - Client-side functionality (copy URL, bulk download)
6. Brief setup instructions

## Key Features

- Automatically rebuild when images are pushed
- Grid layout (4-5 columns on desktop, responsive down to mobile)
- Click individual images to copy their GitHub raw URL
- Bulk download all GIFs as ZIP file
- Show image filename and size
- Fast, no external dependencies
- Works entirely on GitHub Pages (no backend needed)
