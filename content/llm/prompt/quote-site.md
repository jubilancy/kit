## Quote Site Generator Prompt

I want to build a quote website with the following specifications:

### Core Functionality
- **Backend**: CSV file containing quotes with columns for quote text, author, tags, and source
- **Frontend**: Static HTML/CSS/JS site that loads and filters quotes dynamically
- **Filtering**: Users can filter quotes by:
  - Tags (clickable tag buttons)
  - A-Z alphabetical order (by author or quote text)
  - Multiple filters work together (AND logic)
- **Navigation**: Header with:
  - Light/dark mode toggle
  - Links to: Tags (all available), Sources (unique sources), About, More
  - Navigation persists across all pages

### Design & Styling
- **CSS Framework**: [Sakura CSS](https://github.com/oxalorg/sakura) for minimal, elegant styling
- **Font**: Victor Mono for all text
- **Color Scheme**: Light/dark modes built-in, respecting system preferences with manual override
- **Responsive**: Mobile-friendly layout

### Technical Stack
- **Script**: Node.js script that processes CSV → generates static HTML/JSON
- **GitHub Actions**: Automated workflow that:
  - Runs on push to main branch
  - Executes the generation script
  - Commits updated output files back to repo
  - Deploys to GitHub Pages (or specified hosting)
- **No build tools**: Vanilla HTML/CSS/JS, no webpack/bundlers

### File Structure
```
quotes-site/
├── data/
│   └── quotes.csv          # Quote data source
├── scripts/
│   └── generate.js         # CSV → HTML/JSON processor
├── src/
│   ├── index.html          # Main page template
│   ├── styles.css          # Victor Mono + Sakura overrides
│   └── app.js              # Filter logic & theme toggle
├── .github/
│   └── workflows/
│       └── build.yml       # GitHub Actions workflow
├── README.md
└── package.json
```

### CSV Format
```
quote,author,tags,source
"The only way to do great work is to love what you do.","Steve Jobs","work,inspiration,career","commencement speech"
```

### Features
- Display quote + author + source
- Click tags to filter
- A-Z sort respects current filters
- Light/dark toggle saves preference to localStorage
- "More" link provides context or full source URL if available
- "About" page explains the site and how it's updated
- Tag cloud or list view showing all tags and quote counts

### Deployment
- Site should be deployable to GitHub Pages automatically via Actions
- URL structure: `https://username.github.io/quotes-site/`
- Static output: no server required

Please create this site according to these specifications.
