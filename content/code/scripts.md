# Scripts

Multi-line scripts, functions, and bookmarklets intended to be saved and executed as a unit.

## Create an executable script via heredoc
Creates a new executable script file in one command using a heredoc — everything between `<< 'EOF'` and `EOF` becomes the file content.
```bash
cat > ~/bin/myscript.zsh << 'EOF'
#!/bin/zsh
# your script here
EOF
chmod +x ~/bin/myscript.zsh
```

## Scan EPUBs for reader highlights/annotations
Scans every EPUB in the current folder and flags any that contain reader highlights or annotations. More accurate than `unzip -l` since it parses the EPUB manifest properly.
```bash
for f in *.epub; do
  epub-utils files "$f" 2>/dev/null | grep -qE "(mbp|annotations|highlights)" && echo "🎯 $f HAS READER NOTES"
done
```

## Universal pipx install pattern
The safe, modern Mac pattern for installing any Python CLI app without breaking your system Python.
```bash
# Install any Python CLI tool — use this every time instead of pip3
brew install pipx       # only needed once ever
pipx install TOOLNAME   # replace with any tool
TOOLNAME --help         # verify it works
```

## Save All Page Links to a Text File
Collects every anchor `href` and image `src`/`srcset` on the page, then downloads them as a timestamped `.txt` file named after the site's domain.
```javascript
(async () => {
  const url = window.location.origin;
  const timestamp = new Date().toISOString().slice(0,19).replace(/:/g,'-');
  const filename = `${url.replace(/https?:\/\//,'').replace(/\//g,'_')}_${timestamp}.txt`;

  const links = new Set();

  // Anchor hrefs (SAFE)
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.href;
    if (href.startsWith('http')) links.add(href);
  });

  // Image srcs (SAFE)
  document.querySelectorAll('img[src], source[srcset]').forEach(img => {
    const src = img.src || img.getAttribute('srcset')?.split(',')[0]?.trim().split(' ')[0];
    if (src?.startsWith('http')) links.add(src);
  });

  // NO CSS parsing - avoids CORS entirely

  const content = Array.from(links).sort().join('\n');

  const blob = new Blob([content], {type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);

  console.log(`Saved ${links.size} links to Desktop/${filename}`);
})();
```

## Save Only Image URLs to a Text File
A trimmed-down version of the link saver that grabs just image `src` values, sorts them, and downloads them as a text file.
```javascript
(async () => {
  const url = window.location.hostname;
  const imgs = Array.from(document.querySelectorAll('img[src]'))
    .map(img => img.src)
    .filter(src => src.startsWith('http'))
    .filter(Boolean)
    .sort((a,b) => a.localeCompare(b));

  const filename = `${url}_images_${Date.now()}.txt`;
  const blob = new Blob([imgs.join('\n')], {type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  console.log(`${imgs.length} images -> ${filename}`);
})();
```

## Greeting Function Example
A basic JavaScript function demonstrating string concatenation and a console log call.
```javascript
function greet(name) {
  return 'Hello, ' + name + '!';
}
console.log(greet('User'));
```

## Bookmarklet: Highlight Internal vs External Links
Colors every link on the page (blue/red/orange) depending on whether it points to the same host, same path, or an external site.
```javascript
javascript:(function(){var i,x; for (i=0;x=document.links[i];++i) x.style.color=["blue","red","orange"][sim(x,location)]; function sim(a,b){ if (a.hostname!=b.hostname) return 0; if (fixPath(a.pathname)!=fixPath(b.pathname) || a.search!=b.search) return 1; return 2; } function fixPath(p){ p = (p.charAt(0)=="/" ? "" : "/") + p; p=p.split("?")[0]; return p; } })()
```

## Bookmarklet: Preview All Linked Pages in Iframes
Prompts for a width/height, then opens a new window listing every link on the page with an embedded iframe preview of each destination.
```javascript
javascript:(function(){var dims,dimarray,wid,hei,dimstring,x,i,z,url; function linkIsSafe(u){ if (u.substr(0,7)=='mailto:') return false; if (u.substr(0,11)=='javascript:') return false; return true; } function htmlEscape(s){ s=s.replace(/&/g,'&');s=s.replace(/%3E/g,'%3E');s=s.replace(/%3C/g,'%3C');return s; } dims = prompt('width, height for each frame', '760, 500'); if (dims!=null) { dimarray = dims.split(','); wid = parseInt(dimarray[0]); hei = parseInt(dimarray[1]); dimstring = 'width='+wid+' height='+hei; x = document.links; z = window.open().document; for (i = 0; i < x.length; ++i) { url = x[i].href; if(linkIsSafe(url)) { z.writeln('<p>' + x[i].innerHTML + ' (' + htmlEscape(url) + ')<br><iframe ' + dimstring + ' src="' + url.replace(/"/g, '&quot;') + '">[broken iframe]</iframe></p>'); } } z.close(); } })();
```

## Bookmarklet: Add Current Page to FreshRSS
Opens a blank window and redirects it to a FreshRSS "add feed" URL pre-filled with the current page's address.
```javascript
javascript:(function(){var url = location.href; var otherWindow=window.open('about:blank','_blank');otherWindow.opener=null;otherWindow.location='https://rss.32bit.cafe/i/?c=feed&a=add&url_rss='+encodeURIComponent(url);})();
```

## Bookmarklet: Masked Email Input Helper
Injects a small form at the top of the page with an email field, for generating a masked email address (e.g. via Fastmail) on sites with awkward input forms.
```javascript
javascript: (() => {
  const html = '<form><label for="email" style="display: none;">Email</label><input id="op-masked-email-helper" type="email" name="email" autocomplete="email"><button type="submit">Submit</button></form>';
  document.body.insertAdjacentHTML('afterbegin', html);
  document.getElementById('op-masked-email-helper').focus();
})();
```

## Inject External CSS Into an Iframe After Load
Waits for an iframe to finish loading, then posts a message into it containing a CSS URL to apply.
```javascript
const iframe = document.querySelector('iframe');
iframe.onload = function() {
  iframe.contentWindow.postMessage({ cssUrl: 'https://yourdomain.com/styles.css' }, '*');
};
```

## Fetch and Display Nekoweb Site Stats
Calls the [Nekoweb API](https://nekoweb.org/api/site/info/) (MIT licensed) for a given domain and writes the created/updated dates, view count, and follower count into matching page elements.
```javascript
let domain = "maxpixels.moe"; // Insert your domain here!

(async () => {
  try {
    const request = await fetch(`https://nekoweb.org/api/site/info/${domain}`);
    const json = await request.json();

    const updated = new Date(json.updated_at).toLocaleDateString();
    const created = new Date(json.created_at).toLocaleDateString();

    if (document.getElementById("created")) document.getElementById("created").innerHTML = `<em>Created</em>: ${created}`;
    if (document.getElementById("updated")) document.getElementById("updated").innerHTML = `<em>Updated</em>: ${updated}`;
    if (document.getElementById("visitors")) document.getElementById("visitors").innerHTML = `<em>Visits</em>: ${json.views}`;
    if (document.getElementById("followers")) document.getElementById("followers").innerHTML = `<em>Followers</em>: ${json.followers}`;
  } catch (error) {
    console.error(error);
  }
})();
```

## Fetch JSON From an API and Log It
A minimal template for making a GET request and logging the parsed response.
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Conditionally Inject jQuery Into a Page
Checks whether jQuery is already loaded, and if not, appends the CDN script tag to load it.
```javascript
if (typeof jQuery == 'undefined') {
  var script = document.createElement('script');
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
  document.head.appendChild(script);
}
```

## Microlink Query Test Script
A short Node/ESM test script that fetches page metadata for a URL using the `@microlink/mql` package.
```javascript
import mql from '@microlink/mql'

const { data } = await mql('https://github.com/microlinkhq')
```

## C++ Hello World
A minimal C++ program that prints "Hello World!" to standard output (sourced from a Stack Overflow answer, CC BY-SA 4.0).
```cpp
#include <iostream>

int main(){
    std::cout << "Hello World!" << std::endl;
    return 0;
}
```
