---
title: github stars export script
---

You'll need a GitHub personal access token with `starred` scope first. Then:

```bash
GH_TOKEN={TOKEN} && curl -s -H "Authorization: token $GH_TOKEN" -H "Accept: application/vnd.github+json" "https://api.github.com/user/starred?per_page=100" | python3 -c "
import sys, json
repos = json.load(sys.stdin)
lines = ['# GitHub Starred Repos\n']
for r in repos:
    lines.append(f\"- [{r['full_name']}]({r['html_url']}) — {r['description'] or ''}\")
open('stars.md', 'w').write('\n'.join(lines))
print(f'Saved {len(repos)} stars to stars.md')
"
```

That exports first. Then to unstar after confirming the file looks good:

```bash
GH_TOKEN={TOKEN} && curl -s -H "Authorization: token $GH_TOKEN" "https://api.github.com/user/starred?per_page=100" | python3 -c "
import sys, json, urllib.request
repos = json.load(sys.stdin)
for r in repos:
    req = urllib.request.Request(f\"https://api.github.com/user/starred/{r['full_name']}\", method='DELETE')
    req.add_header('Authorization', 'token $GH_TOKEN')
    req.add_header('Accept', 'application/vnd.github+json')
    urllib.request.urlopen(req)
    print(f\"Unstarred {r['full_name']}\")
"
```

it is split intentionally so you can verify how `stars.md` looks right before the unstar runs. If you have more than 100 stars the `per_page=100` cap will truncate.


