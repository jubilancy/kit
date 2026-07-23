# Mac Storage Cleanup & iMessage Export Reference

## Storage Breakdown (Starting Point)

Run this to see what's taking space:

```bash
du -sh ~/* | sort -rh | head -20
du -sh ~/Library/* | sort -rh | head -20
du -sh ~/Library/Application\ Support/* | sort -rh | head -20
```

---

## What's Safe to Delete

### ~/Library/Messages/Caches/Previews/
All subfolders here are safe — they're cached previews, not real data:
- `Attachments/` — thumbnail previews only (real attachments are at `~/Library/Messages/Attachments/`)
- `StickerCache/` — sticker previews
- `Search/` — search index cache

### ~/Library/Messages/ (root) — What NOT to touch
- **Keep:** `chat.db`, `chat.db-wal`, `chat.db-shm` — your message database
- **Keep:** `Attachments/` — actual sent/received files
- **Keep:** `Sync`, `Drafts`, `CloudKitMetaData`, `LiteSegmentStore.db*`
- **Safe to delete:** `NickNameCache`, `StickerCache`, `TranscriptBackgroundCache`, `prewarm.db*`, `Caches/`

### Application Support Leftovers
Apps that are uninstalled still leave folders. Safe to delete if app is gone:
```bash
rm -rf ~/Library/Application\ Support/Claude          # 13G — Electron cache only, no user data
rm -rf ~/Library/Application\ Support/Google          # 14G — if not using Chrome/Drive desktop
```

### Chrome Cache (if keeping Chrome)
```bash
rm -rf ~/Library/Application\ Support/Google/Chrome/Default/Cache
rm -rf ~/Library/Application\ Support/Google/Chrome/Default/Code\ Cache
rm -rf ~/Library/Application\ Support/Google/Chrome/Default/Shared\ Dictionary/cache
rm -rf ~/Library/Application\ Support/Google/Chrome/Default/File\ System   # 1.38GB, rebuilds
rm -rf ~/Library/Caches/Google/Chrome
```

**Do NOT delete:**
- `WebStorage/` — contains localStorage; local-only drafts (e.g. StackEdit) live here
- `Default/` profile folder itself — contains bookmarks, passwords, extensions

**Safe to delete (rebuild on next visit):**
- `Service Worker/`
- `File System/`
- `IndexedDB/`

### General Caches
```bash
rm -rf ~/Library/Caches/*
```
Quit all apps first. Everything rebuilds automatically.

### Discord & Spotify Caches
```bash
rm -rf ~/Library/Application\ Support/discord/Cache
rm -rf ~/Library/Application\ Support/discord/Code\ Cache
rm -rf ~/Library/Application\ Support/Spotify/PersistentCache
```

### OrbStack Leftovers
Even though OrbStack is uninstalled, it leaves a sparse file (shows as 8.8TB but only 7.3MB on disk):
```bash
rm -rf ~/Library/Group\ Containers/HUAQ24HBR6.dev.orbstack
```

### OneDrive Cleanup (after migrating files)
1. Pause OneDrive sync via menu bar icon
2. Copy files to iCloud Drive in Finder (or drag)
3. Quit and uninstall OneDrive from `/Applications`
4. Delete leftover data:
```bash
rm -rf ~/OneDrive\ -\ Virginia\ Tech        # or whatever your folder is named
rm -rf ~/Library/Containers/com.microsoft.OneDrive-mac
rm -rf "~/Library/Group Containers/UBF8T346G9.OneDriveSyncClientSuite"
rm -rf ~/Library/Application\ Support/OneDrive
```
If Finder won't let you delete (cloud-only files), use `rm -rf` in Terminal — it bypasses the download requirement.

---

## iCloud Drive Settings (Important)

**System Settings → Apple ID → iCloud → iCloud Drive:**

- **Sync this Mac** → ON (required for iCloud Drive to work)
- **Optimize Mac Storage** → **Turn ON** — prevents iCloud Drive from downloading everything locally. Without this, `~/Library/Mobile Documents` fills up (was 81GB/87GB on disk in this case)
- **Desktop & Documents Folders** → optional

**Turn off Photos sync to free ~15GB:**
System Settings → Apple ID → iCloud → Photos → turn off "Sync this Mac" → **Delete from Mac**
Photos stay in iCloud and on iPhone, just not stored locally.

---

## iMessage Export

### Best tool: imessage-exporter (free, Terminal)
```bash
brew install imessage-exporter

# Export to iCloud Drive
imessage-exporter -f html -o ~/Library/Mobile\ Documents/com~apple~CloudDocs/MessageExport -m "YourName"

# Or export to Downloads
imessage-exporter -f html -o ~/Downloads/MessageExport -m "YourName"
```
Reads directly from `chat.db`. Outputs one HTML file per conversation. Completely local.

### Other paid options
- **[iMazing](https://imazing.com/)** — exports to PDF, CSV, HTML, TXT; filter by contact/date; subscription
- **[Decipher TextMessage](https://deciphertools.com/decipher-textmessage.html)** — ~$29.99; PDF with chat bubble formatting; good for legal use
- **[iExporter](https://iexporterapp.com/)** — works via iCloud sync, no USB needed; from $5.99/week

### After exporting, reduce local Messages size
Messages app → Settings → iMessage → Keep Messages → change from **Forever** to **1 Year** or **2 Years**
This deletes older messages from both local storage and iCloud.

---

## chat.db Notes
- SQLite database — open with [DB Browser for SQLite](https://sqlitebrowser.org/)
- Contains message text, timestamps, metadata — but NOT attachments
- Good as a backup file, not a standalone archive
- Paired with `~/Library/Messages/Attachments/` = complete archive

---

## Google Drive Cleanup
- Google Drive for Desktop stores local cache in `~/Library/Application Support/Google/DriveFS/`
- If you use [drive.google.com](https://drive.google.com) in browser only, the whole `~/Library/Application Support/Google/` folder is safe to delete
- When deleting via macOS Files Provider (shows "The application could not be found"), clicking Delete only removes local cache — cloud data is unaffected

---

## StackEdit Workspace
- StackEdit stores documents in browser **localStorage** (`WebStorage/` in Chrome profile)
- Deleting `WebStorage/` or `File System/` will break StackEdit's local DB
- **Recovery:** StackEdit → Settings → Export workspace → saves as JSON
- **Restore:** StackEdit → Settings → Import workspace
- **Convert JSON to readable text:** [cloudzenia.com/tools/json-tools/json-to-text](https://cloudzenia.com/tools/json-tools/json-to-text) — paste JSON, get markdown text out
- If synced to Google Drive, files are in a hidden app folder (not visible in regular Drive view) and re-sync automatically on next StackEdit open

---

## AI API Free Tiers (2026)

| Provider | Free Tier | Notes |
|---|---|---|
| [Google AI Studio](https://aistudio.google.com/) | 15 RPM, 1,500 RPD, never expires | Best overall; Gemini Flash |
| [Groq](https://console.groq.com/) | ~14,400 RPD on smaller models | Fastest inference (700+ t/s) |
| [OpenRouter](https://openrouter.ai/) | 29+ free models, one API key | Good for variety |
| [xAI Grok](https://console.x.ai/) | $25 signup + $150/month (data sharing opt-in) | Most generous in $ |
| [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) | 10,000 Neurons/day | Best if already on Cloudflare |
| OpenAI | $5 credit (expires 3 months) | Not permanent |
| Anthropic | ~$5 credit after phone verify | Not permanent |

---

## Hiding API Keys on GitHub Pages (Static Sites)

GitHub Pages is static — no server-side code. Use a proxy:

### Cloudflare Workers (recommended)
Free tier: 100,000 requests/day. Store key as env secret, never in code.

**Worker script:**
```js
export default {
  async fetch(request, env) {
    const { prompt } = await request.json();
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );
    const data = await res.json();
    return Response.json(data);
  }
}
```

- Add `GEMINI_KEY` as a secret in the Worker's environment variables (never hardcoded)
- GitHub Pages frontend fetches your Worker URL (e.g. `api.eliana.lol`)
- Add CORS headers if needed

**Alternatives:** Vercel/Netlify serverless functions, Render Express proxy

---

## Misc Notes
- Uninstalling VS Code does not affect your code files or git repos — it's just an editor
- `~/Library/Mobile Documents` = iCloud Drive local cache; with Optimize Mac Storage off, this was 87GB on disk
- Sparse files (like OrbStack's `data.img.raw`) show huge logical sizes but tiny real disk usage — check "size on disk" not "size"
- OneDrive "Always Keep on This Device" setting causes the folder to always be fully downloaded; right-click → "Free Up Space" to evict
