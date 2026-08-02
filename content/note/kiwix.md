# kiwix
- https://library.kiwix.org/
- https://browse.library.kiwix.org/viewer#gutenberg_en_lcc-pe_2026-03/Home
- https://browse.library.kiwix.org/catalog/v2/entries?count=-1
- https://download.kiwix.org/zim/
- https://browse.library.kiwix.org/catalog/v2/entries?count=-1&category=wikibooks&format=json
- https://browse.library.kiwix.org/content/wikibooks_en_all_maxi_2026-04/Main_Page
- https://browse.library.kiwix.org/catalog/v2/entries?count=-1&category=wikibooks&lang=eng&format=json
- https://browse.library.kiwix.org/catalog/v2/entries?count=-1&category=wikibooks&lang=eng&format=json
- https://browse.library.kiwix.org/content/wikibooks_en_all_maxi_2026-04
- https://browse.library.kiwix.org/content/wikibooks_en_all_nopic_2026-04
- https://feeder.co/help/rss/what-is-rss-and-how-can-you-use-it/?utm_campaign=extension-subscribe-whats-it
- https://browse.library.kiwix.org/content/wikibooks_en_all_maxi_2026-04/Wikibooks_Stacks/Departments
- https://browse.library.kiwix.org/catalog/v2/entries?count=-1&category=wikibooks&lang=eng&format=json
- https://browse.library.kiwix.org/content/wikibooks_en_all_nopic_2026-04/Main_Page
- https://browse.library.kiwix.org/content/wikibooks_en_all_maxi_2026-04/Main_Page
- https://browse.library.kiwix.org/catalog/v2/entries?count=-1&category=wikibooks&lang=eng&format=json


---


# The Master Library Generator Command

I have refined the script to specifically create a **Table of Contents** at the top so you can jump between major departments (Science, Computing, etc.) without scrolling.

```bash
curl -L -# "https://browse.library.kiwix.org/catalog/v2/entries?count=-1&category=wikibooks&lang=eng&format=json" | python3 -c '
import sys, json

try:
    data = json.load(sys.stdin)
    hierarchy = {}

    for entry in data:
        title = entry.get("title", "Unknown Book")
        url = entry.get("url", "#")
        size = int(entry.get("size", 0)) / (1024**2)
        # Kiwix uses "category" as the primary taxonomy for departments
        category = entry.get("category", "General Wikibooks")
        
        if category not in hierarchy: 
            hierarchy[category] = []
        hierarchy[category].append(f"* [{title}]({url}) ({size:.1f} MB)")

    with open("README.md", "w") as f:
        f.write("# 📚 English Wikibooks: Master Catalog\n\n")
        f.write("## 📍 Table of Contents\n")
        
        # Create hyperlinked TOC based on taxonomy
        sorted_cats = sorted(hierarchy.keys())
        for cat in sorted_cats:
            anchor = cat.lower().replace(" ", "-")
            f.write(f"* [{cat.capitalize()}](#-{anchor})\n")
        
        f.write("\n---\n\n")

        # Create the grouped sections
        for cat in sorted_cats:
            anchor = cat.lower().replace(" ", "-")
            f.write(f"## 📂 {cat.capitalize()}\n")
            f.write("<details>\n<summary>Click to expand books in this shelf</summary>\n\n")
            f.write("\n".join(sorted(hierarchy[cat])))
            f.write("\n</details>\n\n")

    print("\n✅ README.md generated successfully with Table of Contents.")
except Exception as e:
    print(f"\n❌ Script failed: {e}")
'
```

---

### **How the Taxonomy Works**

1. **Department / Category:** The script uses the `category` tag from the Kiwix metadata. In the Wikibooks ZIM, this maps to the top-level stacks like **Computing**, **Science**, or **Mathematics**.
    
2. **Shelves:** Because a single ZIM file (like `wikibooks_en_all`) contains all shelves, the "Shelf" names are typically embedded in the book titles (e.g., "Physics: Light and Optics"). The script preserves these titles exactly so you can find specific sub-topics.
    
3. **Hyperlinks:** * **External:** Every book link points directly to the [download.kiwix.org](https://download.kiwix.org/) mirror for that specific version.
    
    - **Internal:** The Table of Contents uses Markdown anchor tags (`#-category`) to let you navigate the file instantly.
        

---

### **Markdown Style Breakdown**

|**Feature**|**Visual Style**|**Function**|
|---|---|---|
|**Table of Contents**|Bulleted list of links|Instant navigation to any department.|
|**Section Headers**|`## 📂 Category`|Clear visual separation of library stacks.|
|**Collapsible Detail**|`<details>` toggles|Keeps the file clean; hides thousands of books until needed.|
|**Metadata**|`(45.2 MB)`|Lets you see the "weight" of each book before clicking.|

---

### **Final Pro-Tip for your Mac**

Since you are generating a Markdown file, you can preview it immediately in your terminal (if you have `glow` installed) or open it in your default Markdown editor:

Bash

```
open README.md
```

_On a Mac, this will usually open it in TextEdit or a dedicated editor like Obsidian or MacDown._