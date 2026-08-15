# Commands

Short, single-purpose snippets meant to be run directly (mostly as one-off browser console commands).

## Copy All Image URLs on a Page
Selects every `<img>` on the page and copies their `src` URLs to the clipboard as a newline-separated list.
```js
copy($$('img').map(img => img.src).join('\n'));
```

## Extract Text from All Links on a Page
Pulls the visible text of every link on the page into an array.
```js
Array.from(document.querySelectorAll('a')).map(link => link.textContent);
```

## Change Text of an Element by ID
Replaces the text content of a specific element, referenced by its ID.
```js
document.getElementById('myElementId').textContent = 'New Text';
```

## Hide All Elements With a Given Class
Sets `display: none` on every element matching a class name.
```js
document.querySelectorAll('.myClassName').forEach(el => el.style.display = 'none');
```

## Log the Currently Selected DevTools Element
Prints the element currently selected in the Elements panel (and its attributes) to the console.
```js
console.log($0);
console.log($0.attributes);
```

## Get the Value of a Single Input Field
Reads the current value from an input element by ID.
```js
document.getElementById('myInput').value;
```

## Get All Form Field Values
Collects the name/value pairs of every field in the first form on the page.
```js
Array.from(document.forms[0].elements).map(el => ({ name: el.name, value: el.value }));
```

## Time a Function's Execution
Starts and stops a named timer in the console to measure how long code takes to run.
```js
console.time('myFunction');
// ... call myFunction() ...
console.timeEnd('myFunction');
```

## Clear the Console
Clears all output from the current DevTools console.
```js
console.clear();
```

## Run a Python script
Runs a Python script — replace with any `.py` filename.
```bash
python3 bulk_fix_html.py
```

## Find subdirectories and run a script on each
Finds every subfolder inside a path and runs `combine_files.sh` on each one.
```bash
find "/path/to/folder" -type d -exec ./combine_files.sh "{}" \;
```

## Open a file in nano
Opens a file in the nano terminal text editor for editing.
```bash
nano clean_containers.sh
```

## Make a script executable
Makes a script executable so you can run it directly.
```bash
chmod +x clean_containers.sh
```

## Run a local script
Runs a shell script in the current directory (the `./` means "look here, not in PATH").
```bash
./clean_containers.sh
```

## Install GitHub CLI
Installs the GitHub CLI tool via Homebrew.
```bash
brew install gh
```

## Reinstall GitHub CLI
Reinstalls/refreshes GitHub CLI via Homebrew.
```bash
brew reinstall gh
```

## Clone a repo with gh
Clones a GitHub repo to your local machine via the CLI.
```bash
gh repo clone biancarosa/lastfm-last-played
```

## Authenticate GitHub CLI
Authenticates GitHub CLI with your GitHub account (required before using other `gh` commands).
```bash
gh auth login
```

## Set GitHub token env variable
Sets your GitHub personal access token as an environment variable.
```bash
export GH_TOKEN=your_token
```

## Show gh CLI help
Shows all available `gh` commands and flags.
```bash
gh help
```

## Download URLs from a list
Downloads every URL listed line-by-line in `files.txt`.
```bash
wget -i files.txt
```

## Install wget
Installs `wget` via Homebrew (not built-in on Mac).
```bash
brew install wget
```

## Create SSH directory with strict permissions
Creates `~/.ssh` with strict permissions (only you can read/write/execute).
```bash
mkdir -m 700 ~/.ssh
```

## Generate an SSH key
Generates a secure ED25519 SSH key with 100 key-derivation rounds.
```bash
ssh-keygen -t ed25519 -a 100
```

## Test-run a script on the first 5 URLs
Pipes just the first 5 lines of a file into a script — useful for test runs before processing everything.
```bash
head -5 urls-clean.txt | ./iceberg-full.zsh /dev/stdin test-run
```

## Install GNU parallel
Installs GNU `parallel` via Homebrew.
```bash
brew install parallel
```

## Create a ~/bin directory
Creates `~/bin` (and any missing parents); no error if it already exists.
```bash
mkdir -p ~/bin
```

## Move a script into ~/bin
Moves a file into your `~/bin` folder.
```bash
mv iceberg-full.zsh ~/bin/
```

## Make a ~/bin script executable
Makes a script in `~/bin` executable so you can run it directly.
```bash
chmod +x ~/bin/iceberg-full.zsh
```

## Add ~/bin to PATH permanently
Permanently adds your `~/bin` folder to PATH so scripts there run from anywhere.
```bash
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc
```

## Reload shell config
Reloads your shell config file so changes take effect immediately without restarting Terminal.
```bash
source ~/.zshrc
```

## Check where a command lives
Shows the full path of where a command lives (confirms it's in your PATH).
```bash
which iceberg-full.zsh
```

## Add Homebrew bin to PATH (temporary)
Temporarily adds Homebrew's bin to PATH for the current session only.
```bash
export PATH="/opt/homebrew/bin:$PATH"
```

## Reset shell command hash table
Clears the shell's command location cache — run after modifying PATH.
```bash
hash -r
```

## Add Homebrew bin to PATH permanently
Permanently adds Homebrew's bin to PATH (fixes `command not found` for Homebrew tools).
```bash
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
```

## Show npm global install prefix
Shows where npm installs global packages.
```bash
npm config get prefix
```

## List global npm packages
Lists all globally installed npm packages.
```bash
npm list -g --depth=0
```

## Check a package version via npx
Runs an npm package without installing it globally; replace the tool name as needed.
```bash
npx url-to-markdown-cli-tool --version
```

## Count bytes in a file
Counts the byte size of a file.
```bash
wc -c file.md
```

## List matching Homebrew bin files
Lists files in Homebrew's bin folder matching a pattern.
```bash
ls -la /opt/homebrew/bin/url-to*
```

## Install epub-utils via pip (fails on modern Mac)
Attempts to install via plain `pip` — fails on modern Mac due to PEP 668 externally-managed-environment restrictions.
```bash
pip install epub-utils
```

## Install Python via Homebrew
Installs Python via Homebrew (attempted fix before switching to pipx).
```bash
brew install python
```

## Install epub-utils via pip3 (fails, PEP 668)
Attempts install with `pip3` — still fails due to PEP 668 restrictions on Homebrew-managed Python.
```bash
pip3 install epub-utils
```

## Install pipx
Installs `pipx` — the correct way to install Python CLI tools on modern Mac (avoids PEP 668 "externally-managed" errors from Homebrew Python).
```bash
brew install pipx
```

## Install a Python CLI tool via pipx
Installs any Python CLI tool in an isolated virtualenv, globally accessible.
```bash
pipx install epub-utils
```

## Install black
Installs the Python code formatter via pipx.
```bash
pipx install black
```

## Install ruff
Installs the Python linter via pipx.
```bash
pipx install ruff
```

## Install httpie
Installs HTTPie, a cURL alternative for making HTTP requests from the terminal.
```bash
pipx install httpie
```

## List pipx-installed tools
Shows all Python CLI tools installed via pipx.
```bash
pipx list
```

## Upgrade all pipx tools
Updates every pipx-installed tool to its latest version in one command.
```bash
pipx upgrade-all
```

## List files inside an EPUB
Lists all internal files inside an EPUB archive.
```bash
epub-utils files file.epub
```

## Show EPUB metadata
Shows book info — title, author, and other metadata.
```bash
epub-utils metadata file.epub
```

## Show EPUB table of contents
Displays the table of contents of an EPUB.
```bash
epub-utils toc file.epub
```

## Show EPUB manifest
Shows the full chapter/file structure (the EPUB manifest).
```bash
epub-utils manifest file.epub
```

## Extract EPUB chapter content
Extracts and prints the content of a specific chapter by its ID.
```bash
epub-utils content chapter_id
```
