---
title: Bulk Image Converter (Automator Workflow)
---

A small Automator workflow that batch-converts dropped images to JPEG at 80% quality, moves the results to a dedicated output folder, and fires a completion notification. It's four chained actions — no Automator UI screenshots needed to understand what's happening, since the whole thing is just a plist.

## What it does

1. **Run Shell Script** — prints a start message to the log
2. **Change Type of Images** — converts input to `JPEG` at `0.8` quality
3. **Move Finder Items** — moves converted files to `~/Desktop/Converted Images`, without overwriting originals
4. **Run Shell Script** — fires a macOS notification via `osascript` on completion

The four actions are wired in a straight line through the `connectors` dict — each action's `OutputUUID` feeds the next action's `InputUUID`.

## Key sections

The conversion step is the one worth tuning. Format and quality live here:

```xml
<key>ActionParameters</key>
<dict>
	<key>imageFormat</key>
	<string>JPEG</string>
	<key>imageQuality</key>
	<real>0.80000000000000004</real>
</dict>
```

Swap `JPEG` for `PNG`, `WebP`, `TIFF`, or `HEIF`, and adjust the `0.0`–`1.0` quality value depending on whether you want smaller files or higher fidelity.

The output destination is set in the move step:

```xml
<key>ActionParameters</key>
<dict>
	<key>destination</key>
	<string>~/Desktop/Converted Images</string>
	<key>overwrite</key>
	<false/>
</dict>
```

## Full workflow file

The complete `.workflow` plist, ready to save as-is and double-click to install in Automator:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>AMApplicationBuild</key>
	<string>523.30.1</string>
	<key>AMApplicationVersion</key>
	<string>2.10</string>
	<key>AMDocumentVersion</key>
	<string>2</string>
	<key>actions</key>
	<array>
		<dict>
			<key>AMAccepts</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Optional</key>
				<true/>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.string</string>
				</array>
			</dict>
			<key>AMActionVersion</key>
			<string>2.2.3</string>
			<key>AMApplication</key>
			<array>
				<string>Automator</string>
			</array>
			<key>AMParameterProperties</key>
			<dict>
				<key>COMMAND_STRING</key>
				<dict/>
			</dict>
			<key>AMProvides</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.string</string>
				</array>
			</dict>
			<key>ActionBundlePath</key>
			<string>/System/Library/Automator/Run Shell Script.action</string>
			<key>ActionName</key>
			<string>Run Shell Script</string>
			<key>ActionParameters</key>
			<dict>
				<key>COMMAND_STRING</key>
				<string>echo "Starting bulk image conversion workflow..."</string>
			</dict>
			<key>BundleIdentifier</key>
			<string>com.apple.automator.run-shell-script</string>
			<key>CFBundleVersion</key>
			<string>2.2.3</string>
			<key>CanShowWhenRun</key>
			<true/>
			<key>Class</key>
			<string>RunShellScriptAction</string>
			<key>InputUUID</key>
			<string>8E3BD7D9-1F7D-4A22-9050-3F39B4BA3AF3</string>
			<key>Keywords</key>
			<array>
				<string>Shell</string>
				<string>Script</string>
				<string>Command</string>
			</array>
			<key>OutputName</key>
			<string>Run Shell Script</string>
			<key>OutputUUID</key>
			<string>CCE6B3F9-F5A4-4E23-8E62-A8C8F6B8B3C1</string>
			<key>ShowWhenRun</key>
			<true/>
			<key>UUID</key>
			<string>8E3BD7D9-1F7D-4A22-9050-3F39B4BA3AF3</string>
		</dict>
		<dict>
			<key>AMAccepts</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Optional</key>
				<false/>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.url</string>
				</array>
			</dict>
			<key>AMActionVersion</key>
			<string>1.1.2</string>
			<key>AMApplication</key>
			<array>
				<string>Automator</string>
			</array>
			<key>AMParameterProperties</key>
			<dict>
				<key>imageFormat</key>
				<dict/>
				<key>imageQuality</key>
				<dict/>
			</dict>
			<key>AMProvides</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.url</string>
				</array>
			</dict>
			<key>ActionBundlePath</key>
			<string>/System/Library/Automator/Change Type of Images.action</string>
			<key>ActionName</key>
			<string>Change Type of Images</string>
			<key>ActionParameters</key>
			<dict>
				<key>imageFormat</key>
				<string>JPEG</string>
				<key>imageQuality</key>
				<real>0.80000000000000004</real>
			</dict>
			<key>BundleIdentifier</key>
			<string>com.apple.automator.change-type-images</string>
			<key>CFBundleVersion</key>
			<string>1.1.2</string>
			<key>CanShowWhenRun</key>
			<true/>
			<key>Class</key>
			<string>ChangeTypeImagesAction</string>
			<key>InputUUID</key>
			<string>F8A4C2D1-7B3E-4F9A-8C5D-6E7F8A9B0C1D</string>
			<key>Keywords</key>
			<array>
				<string>Image</string>
				<string>Format</string>
				<string>Convert</string>
			</array>
			<key>OutputName</key>
			<string>Change Type of Images</string>
			<key>OutputUUID</key>
			<string>2D4E6F8A-9B0C-1D2E-3F4A-5B6C7D8E9F0A</string>
			<key>ShowWhenRun</key>
			<true/>
			<key>UUID</key>
			<string>F8A4C2D1-7B3E-4F9A-8C5D-6E7F8A9B0C1D</string>
		</dict>
		<dict>
			<key>AMAccepts</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Optional</key>
				<false/>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.url</string>
				</array>
			</dict>
			<key>AMActionVersion</key>
			<string>1.2.1</string>
			<key>AMApplication</key>
			<array>
				<string>Automator</string>
			</array>
			<key>AMParameterProperties</key>
			<dict>
				<key>destination</key>
				<dict/>
				<key>overwrite</key>
				<dict/>
				<key>replaceText</key>
				<dict/>
				<key>toDirectory</key>
				<dict/>
			</dict>
			<key>AMProvides</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.url</string>
				</array>
			</dict>
			<key>ActionBundlePath</key>
			<string>/System/Library/Automator/Move Finder Items.action</string>
			<key>ActionName</key>
			<string>Move Finder Items</string>
			<key>ActionParameters</key>
			<dict>
				<key>destination</key>
				<string>~/Desktop/Converted Images</string>
				<key>overwrite</key>
				<false/>
			</dict>
			<key>BundleIdentifier</key>
			<string>com.apple.automator.move-finder-items</string>
			<key>CFBundleVersion</key>
			<string>1.2.1</string>
			<key>CanShowWhenRun</key>
			<true/>
			<key>Class</key>
			<string>MovFinderItemsAction</string>
			<key>InputUUID</key>
			<string>3C5E7F9A-1B2D-4E6F-8A9B-0C1D2E3F4A5B</string>
			<key>Keywords</key>
			<array>
				<string>Move</string>
				<string>Folder</string>
				<string>File</string>
			</array>
			<key>OutputName</key>
			<string>Move Finder Items</string>
			<key>OutputUUID</key>
			<string>5B6C7D8E-9F0A-1B2C-3D4E-5F6A7B8C9D0E</string>
			<key>ShowWhenRun</key>
			<true/>
			<key>UUID</key>
			<string>3C5E7F9A-1B2D-4E6F-8A9B-0C1D2E3F4A5B</string>
		</dict>
		<dict>
			<key>AMAccepts</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Optional</key>
				<true/>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.string</string>
				</array>
			</dict>
			<key>AMActionVersion</key>
			<string>2.2.3</string>
			<key>AMApplication</key>
			<array>
				<string>Automator</string>
			</array>
			<key>AMParameterProperties</key>
			<dict>
				<key>COMMAND_STRING</key>
				<dict/>
			</dict>
			<key>AMProvides</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.string</string>
				</array>
			</dict>
			<key>ActionBundleP</key>
			<string>/System/Library/Automator/Run Shell Script.action</string>
			<key>ActionName</key>
			<string>Run Shell Script</string>
			<key>ActionParameters</key>
			<dict>
				<key>COMMAND_STRING</key>
				<string>osascript -e 'display notification "Image conversion complete!" with title "Bulk Image Converter"'</string>
			</dict>
			<key>BundleIdentifier</key>
			<string>com.apple.automator.run-shell-script</string>
			<key>CFBundleVersion</key>
			<string>2.2.3</string>
			<key>CanShowWhenRun</key>
			<true/>
			<key>Class</key>
			<string>RunShellScriptAction</string>
			<key>InputUUID</key>
			<string>7D8E9F0A-1B2C-3D4E-5F6A-7B8C9D0E1F2A</string>
			<key>Keywords</key>
			<array>
				<string>Shell</string>
				<string>Script</string>
				<string>Command</string>
			</array>
			<key>OutputName</key>
			<string>Run Shell Script</string>
			<key>OutputUUID</key>
			<string>8E9F0A1B-2C3D-4E5F-6A7B-8C9D0E1F2A3B</string>
			<key>ShowWhenRun</key>
			<true/>
			<key>UUID</key>
			<string>7D8E9F0A-1B2C-3D4E-5F6A-7B8C9D0E1F2A</string>
		</dict>
	</array>
	<key>connectors</key>
	<dict>
		<key>CCE6B3F9-F5A4-4E23-8E62-A8C8F6B8B3C1</key>
		<dict>
			<key>from</key>
			<string>8E3BD7D9-1F7D-4A22-9050-3F39B4BA3AF3</string>
			<key>to</key>
			<string>F8A4C2D1-7B3E-4F9A-8C5D-6E7F8A9B0C1D</string>
		</dict>
		<key>2D4E6F8A-9B0C-1D2E-3F4A-5B6C7D8E9F0A</key>
		<dict>
			<key>from</key>
			<string>F8A4C2D1-7B3E-4F9A-8C5D-6E7F8A9B0C1D</string>
			<key>to</key>
			<string>3C5E7F9A-1B2D-4E6F-8A9B-0C1D2E3F4A5B</string>
		</dict>
		<key>5B6C7D8E-9F0A-1B2C-3D4E-5F6A7B8C9D0E</key>
		<dict>
			<key>from</key>
			<string>3C5E7F9A-1B2D-4E6F-8A9B-0C1D2E3F4A5B</string>
			<key>to</key>
			<string>7D8E9F0A-1B2C-3D4E-5F6A-7B8C9D0E1F2A</string>
		</dict>
	</connectors>
	<key>workflowMetaData</key>
	<dict>
		<key>folderActionInput</key>
		<false/>
		<key>inputTypeIdentifier</key>
		<string>com.apple.cocoa.url</string>
		<key>outputTypeIdentifier</key>
		<string>com.apple.cocoa.url</string>
		<key>workflowTypes</key>
		<array>
			<string>application</string>
		</array>
	</dict>
</dict>
</plist>
```

## Download it directly

Quartz allows raw HTML in markdown, so this button embeds the same plist as a string, builds a `Blob`, and triggers a download via `URL.createObjectURL` — no server round-trip, pure browser API.

<button id="download-workflow-btn" style="padding: 0.5em 1em; cursor: pointer;">Download .workflow</button>

<script>
function setupWorkflowDownloadButton() {
  const btn = document.getElementById('download-workflow-btn');
  if (!btn) return;

  const workflowXML = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>AMApplicationBuild</key>
	<string>523.30.1</string>
	<key>AMApplicationVersion</key>
	<string>2.10</string>
	<key>AMDocumentVersion</key>
	<string>2</string>
	<key>actions</key>
	<array>
		<dict>
			<key>AMAccepts</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Optional</key>
				<true/>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.string</string>
				</array>
			</dict>
			<key>AMActionVersion</key>
			<string>2.2.3</string>
			<key>AMApplication</key>
			<array>
				<string>Automator</string>
			</array>
			<key>AMParameterProperties</key>
			<dict>
				<key>COMMAND_STRING</key>
				<dict/>
			</dict>
			<key>AMProvides</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.string</string>
				</array>
			</dict>
			<key>ActionBundlePath</key>
			<string>/System/Library/Automator/Run Shell Script.action</string>
			<key>ActionName</key>
			<string>Run Shell Script</string>
			<key>ActionParameters</key>
			<dict>
				<key>COMMAND_STRING</key>
				<string>echo "Starting bulk image conversion workflow..."</string>
			</dict>
			<key>BundleIdentifier</key>
			<string>com.apple.automator.run-shell-script</string>
			<key>CFBundleVersion</key>
			<string>2.2.3</string>
			<key>CanShowWhenRun</key>
			<true/>
			<key>Class</key>
			<string>RunShellScriptAction</string>
			<key>InputUUID</key>
			<string>8E3BD7D9-1F7D-4A22-9050-3F39B4BA3AF3</string>
			<key>Keywords</key>
			<array>
				<string>Shell</string>
				<string>Script</string>
				<string>Command</string>
			</array>
			<key>OutputName</key>
			<string>Run Shell Script</string>
			<key>OutputUUID</key>
			<string>CCE6B3F9-F5A4-4E23-8E62-A8C8F6B8B3C1</string>
			<key>ShowWhenRun</key>
			<true/>
			<key>UUID</key>
			<string>8E3BD7D9-1F7D-4A22-9050-3F39B4BA3AF3</string>
		</dict>
		<dict>
			<key>AMAccepts</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Optional</key>
				<false/>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.url</string>
				</array>
			</dict>
			<key>AMActionVersion</key>
			<string>1.1.2</string>
			<key>AMApplication</key>
			<array>
				<string>Automator</string>
			</array>
			<key>AMParameterProperties</key>
			<dict>
				<key>imageFormat</key>
				<dict/>
				<key>imageQuality</key>
				<dict/>
			</dict>
			<key>AMProvides</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.url</string>
				</array>
			</dict>
			<key>ActionBundlePath</key>
			<string>/System/Library/Automator/Change Type of Images.action</string>
			<key>ActionName</key>
			<string>Change Type of Images</string>
			<key>ActionParameters</key>
			<dict>
				<key>imageFormat</key>
				<string>JPEG</string>
				<key>imageQuality</key>
				<real>0.80000000000000004</real>
			</dict>
			<key>BundleIdentifier</key>
			<string>com.apple.automator.change-type-images</string>
			<key>CFBundleVersion</key>
			<string>1.1.2</string>
			<key>CanShowWhenRun</key>
			<true/>
			<key>Class</key>
			<string>ChangeTypeImagesAction</string>
			<key>InputUUID</key>
			<string>F8A4C2D1-7B3E-4F9A-8C5D-6E7F8A9B0C1D</string>
			<key>Keywords</key>
			<array>
				<string>Image</string>
				<string>Format</string>
				<string>Convert</string>
			</array>
			<key>OutputName</key>
			<string>Change Type of Images</string>
			<key>OutputUUID</key>
			<string>2D4E6F8A-9B0C-1D2E-3F4A-5B6C7D8E9F0A</string>
			<key>ShowWhenRun</key>
			<true/>
			<key>UUID</key>
			<string>F8A4C2D1-7B3E-4F9A-8C5D-6E7F8A9B0C1D</string>
		</dict>
		<dict>
			<key>AMAccepts</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Optional</key>
				<false/>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.url</string>
				</array>
			</dict>
			<key>AMActionVersion</key>
			<string>1.2.1</string>
			<key>AMApplication</key>
			<array>
				<string>Automator</string>
			</array>
			<key>AMParameterProperties</key>
			<dict>
				<key>destination</key>
				<dict/>
				<key>overwrite</key>
				<dict/>
				<key>replaceText</key>
				<dict/>
				<key>toDirectory</key>
				<dict/>
			</dict>
			<key>AMProvides</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.url</string>
				</array>
			</dict>
			<key>ActionBundlePath</key>
			<string>/System/Library/Automator/Move Finder Items.action</string>
			<key>ActionName</key>
			<string>Move Finder Items</string>
			<key>ActionParameters</key>
			<dict>
				<key>destination</key>
				<string>~/Desktop/Converted Images</string>
				<key>overwrite</key>
				<false/>
			</dict>
			<key>BundleIdentifier</key>
			<string>com.apple.automator.move-finder-items</string>
			<key>CFBundleVersion</key>
			<string>1.2.1</string>
			<key>CanShowWhenRun</key>
			<true/>
			<key>Class</key>
			<string>MovFinderItemsAction</string>
			<key>InputUUID</key>
			<string>3C5E7F9A-1B2D-4E6F-8A9B-0C1D2E3F4A5B</string>
			<key>Keywords</key>
			<array>
				<string>Move</string>
				<string>Folder</string>
				<string>File</string>
			</array>
			<key>OutputName</key>
			<string>Move Finder Items</string>
			<key>OutputUUID</key>
			<string>5B6C7D8E-9F0A-1B2C-3D4E-5F6A7B8C9D0E</string>
			<key>ShowWhenRun</key>
			<true/>
			<key>UUID</key>
			<string>3C5E7F9A-1B2D-4E6F-8A9B-0C1D2E3F4A5B</string>
		</dict>
		<dict>
			<key>AMAccepts</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Optional</key>
				<true/>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.string</string>
				</array>
			</dict>
			<key>AMActionVersion</key>
			<string>2.2.3</string>
			<key>AMApplication</key>
			<array>
				<string>Automator</string>
			</array>
			<key>AMParameterProperties</key>
			<dict>
				<key>COMMAND_STRING</key>
				<dict/>
			</dict>
			<key>AMProvides</key>
			<dict>
				<key>Container</key>
				<string>List</string>
				<key>Types</key>
				<array>
					<string>com.apple.cocoa.string</string>
				</array>
			</dict>
			<key>ActionBundleP</key>
			<string>/System/Library/Automator/Run Shell Script.action</string>
			<key>ActionName</key>
			<string>Run Shell Script</string>
			<key>ActionParameters</key>
			<dict>
				<key>COMMAND_STRING</key>
				<string>osascript -e 'display notification "Image conversion complete!" with title "Bulk Image Converter"'</string>
			</dict>
			<key>BundleIdentifier</key>
			<string>com.apple.automator.run-shell-script</string>
			<key>CFBundleVersion</key>
			<string>2.2.3</string>
			<key>CanShowWhenRun</key>
			<true/>
			<key>Class</key>
			<string>RunShellScriptAction</string>
			<key>InputUUID</key>
			<string>7D8E9F0A-1B2C-3D4E-5F6A-7B8C9D0E1F2A</string>
			<key>Keywords</key>
			<array>
				<string>Shell</string>
				<string>Script</string>
				<string>Command</string>
			</array>
			<key>OutputName</key>
			<string>Run Shell Script</string>
			<key>OutputUUID</key>
			<string>8E9F0A1B-2C3D-4E5F-6A7B-8C9D0E1F2A3B</string>
			<key>ShowWhenRun</key>
			<true/>
			<key>UUID</key>
			<string>7D8E9F0A-1B2C-3D4E-5F6A-7B8C9D0E1F2A</string>
		</dict>
	</array>
	<key>connectors</key>
	<dict>
		<key>CCE6B3F9-F5A4-4E23-8E62-A8C8F6B8B3C1</key>
		<dict>
			<key>from</key>
			<string>8E3BD7D9-1F7D-4A22-9050-3F39B4BA3AF3</string>
			<key>to</key>
			<string>F8A4C2D1-7B3E-4F9A-8C5D-6E7F8A9B0C1D</string>
		</dict>
		<key>2D4E6F8A-9B0C-1D2E-3F4A-5B6C7D8E9F0A</key>
		<dict>
			<key>from</key>
			<string>F8A4C2D1-7B3E-4F9A-8C5D-6E7F8A9B0C1D</string>
			<key>to</key>
			<string>3C5E7F9A-1B2D-4E6F-8A9B-0C1D2E3F4A5B</string>
		</dict>
		<key>5B6C7D8E-9F0A-1B2C-3D4E-5F6A7B8C9D0E</key>
		<dict>
			<key>from</key>
			<string>3C5E7F9A-1B2D-4E6F-8A9B-0C1D2E3F4A5B</string>
			<key>to</key>
			<string>7D8E9F0A-1B2C-3D4E-5F6A-7B8C9D0E1F2A</string>
		</dict>
	</connectors>
	<key>workflowMetaData</key>
	<dict>
		<key>folderActionInput</key>
		<false/>
		<key>inputTypeIdentifier</key>
		<string>com.apple.cocoa.url</string>
		<key>outputTypeIdentifier</key>
		<string>com.apple.cocoa.url</string>
		<key>workflowTypes</key>
		<array>
			<string>application</string>
		</array>
	</dict>
</dict>
</plist>
`;

  btn.addEventListener('click', function() {
    const blob = new Blob([workflowXML], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bulk-image-converter.workflow';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

// Quartz fires a custom "nav" event after initial load AND after every
// SPA client-side navigation. Hooking here (instead of running the setup
// code inline at parse time) means the listener gets attached whether the
// user hard-loads this page or clicks into it from another Quartz page.
document.addEventListener('nav', setupWorkflowDownloadButton);
</script>
