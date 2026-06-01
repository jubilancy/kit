---
source: https://greasyfork.org/en/import
created: 2026-03-15
tags:
  - new-clippings
kind: obsidian-clipper
favorite: yes
---
Favorites by [etmr](/en/users/1580520-etmr) [Edit](/en/users/1580520-etmr/sets/594343/edit)

---

Greasy Fork can import scripts that already hosted elsewhere, for example in a version control system (like GitHub), your own server, or another user script hosting site.

Provide URLs to import from, separated by newlines. These should be URLs to the raw JS or CSS files.  

What language are the above URLs?  
Detect based on the extension, defaulting to JavaScript  
JavaScript  
CSS

After the initial import, the script(s) should be synced:  
Automatic - it will be periodically checked for updates  
Manual - it will be checked for updates only when you trigger it

For scripts from source control, ensure that the URL you use refers to a branch and not a specific commit, otherwise it will never get updated. For example, `https://bitbucket.org/username/reponame/raw/**branch-name**/script.user.js` rather than `https://bitbucket.org/username/reponame/raw/**commit-hash**/script.user.js`.

Scripts imported from GitHub, Bitbucket, or GitLab can also be set up to sync using a webhook. A webhook will make it so your scripts are immediately updated on Greasy Fork when you push to your repository. If you want to use a webhook but haven't set it up yet, do the import first, then [set up the webhook after](/en/users/webhook-info).

- https://greasyfork.org/en/scripts/by-site/tiktok.com
- https://greasyfork.org/en/scripts/by-site/tiktok.com?site=tiktok.com&q=tiktok
- https://greasyfork.org/en/scripts?q=imdb
- https://greasyfork.org/en/users/webhook-info