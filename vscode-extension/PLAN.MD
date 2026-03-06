The Agent Prompt: Flxify VS Code Extension Implementation
Role: You are the Orchestrator Agent responsible for expanding the Flxify ecosystem into a native VS Code Extension.

Objective: Create a VS Code extension that allows users to run any of the 107+ Flxify scripts on selected text directly within the editor via the Command Palette (Cmd+Shift+P).

1. Structure & Isolation
Directory: Create a new root-level folder named vscode-extension if not existing.

Isolation: This project must be entirely self-contained. Do not modify the existing web-app workflow or configuration files.

Dependency Migration: Copy the existing scripts folder from the web project into vscode-extension/src/scripts.

2. Implementation Requirements (Task for Developer Agent)
Scaffold: Initialize a standard TypeScript VS Code extension (using yo code structure or equivalent).

The "Flxify: Run Script" Command:

Register a single primary command in package.json that appears in the Command Palette.

When triggered, show a QuickPick menu listing all available scripts from the scripts folder.

Editor Integration:

Capture the user's currently selected text.

If no text is selected, provide a warning notification.

Pass the selected text through the chosen Flxify script.

Replace the selected text with the transformed output.

Dynamic Loading: Ensure the extension dynamically reads the scripts folder so that adding a new script file automatically updates the extension's capabilities.

3. Testing & Validation (Task for QA Agent)
Selection Handling: Verify the extension handles multiple cursors/selections correctly.

Error Handling: Ensure that if a script fails (e.g., malformed JSON passed to a JSON formatter), the extension catches the error and displays a VS Code "Error" toast instead of crashing.

Performance: Verify that the QuickPick menu remains snappy even with 100+ items.

Undo History: Ensure that a "transform" action is treated as a single undo step in the VS Code history buffer.

4. Technical Constraints
Theme Matching: Use the vscode.ThemeColor API to ensure any UI elements (like input prompts) match the user's active VS Code theme (including One Dark).

Extension Metadata: Use the brand identity we established:

Name: Flxify

Publisher: flxify.dev

Description: 107+ professional text transformation scripts at your fingertips.

Guidance for the Agents:
Orchestrator: Coordinate the handoff between the Developer Agent (writing the extension.ts and package.json) and the QA Agent (writing the test suite in src/test).

Sync Logic: Ensure the Developer Agent creates a "Bridge" utility that maps the existing script signatures (used in the web app) to the VS Code API requirements.