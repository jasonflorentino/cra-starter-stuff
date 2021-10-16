# CRA Starter Stuff
### Some additions, overwrites, and boilerplate for my CRA apps

## Contents

### .vscode/
Folder with VS Code settings to fix with eslint on save.

### src/
My own starter React components.  
They have some JSS set up for styling so you'll need to install `react-jss` if you want to keep that.  
The component files are organized like this:
```
├─ Imports
│  ├─ Library/3rd Party
│  └─ Local
├─ Constants
├─ Main Component
├─ Styles
└─ Exports (Including the default export)
```

### eslintConfigForPackage.json
Some rules I like for style and formatting that can be added to `package.json` to extend eslint V7 that comes with CRA / react-scrips
