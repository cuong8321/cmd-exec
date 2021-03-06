
# cmd-exec package

Manage and execute shell/javascript commands in your Atom.

## Features
 - Loads commands from config.cson, registers them to `atom.commands`.
 - Simulate a simple shell/terminal.

## What can I do with this package?
 - Simulate a terminal, command prompt.
 - Run a system command (i.e. bash-script, cmd) directly from Atom Workspace, and so you can:
  - Open 'this' file location in file explorer, terminal, cmd...
  - Make a simple command to compile C/C++, CoffeeScript, LESS, SASS...
  - Run your file directly, e.g. Python, NodeJS...
  - And many, many more...
 - [Examples](https://github.com/ksxatompackages/cmd-exec-documentation/blob/master/examples/index.md)

## Installation

To install this package, open terminal and enter:

```bash
apm install command-executor
```

If you use console simulator and want to copy text in the console, you would need [enable-clipboard-helper](https://atom.io/packages/enable-clipboard-helper):
```bash
apm install enable-clipboard-helper
```

If you use console simulator and want to close it by an atom command or by a keystroke (e.g. <kbd>ESC</kbd>), you would need [enable-pane-item-control-helper](https://atom.io/packages/enable-pane-item-control-helper) (below) and read [this tips-and-tricks](https://github.com/ksxatompackages/cmd-exec-documentation/blob/master/wiki/user-manual/tips-and-tricks.md#quick-close):
```bash
apm install enable-pane-item-control-helper
```

## Requirements

 * Atom must support ECMAScript 6 syntax

## User Manual

Honestly, you definitely have to read this one below before using this package, be sure that you have a Web browser, then let's go:
 - [User Manual](https://github.com/ksxatompackages/cmd-exec-documentation/blob/master/wiki/user-manual/start.md)
