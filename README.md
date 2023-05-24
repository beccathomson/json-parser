## Binary Tree Visualization

This is a simple React application that allows you to visualize a binary tree structure. It provides a graphical representation of the binary tree, highlighting the deepest subtree with a green color.

**Start the application:**
npm start


### Usage

Upload a JSON file containing binary tree data. The JSON file should have the following structure:

```json
{
  "id": "root",
  "left": {
    "id": "left_child",
    "left": null,
    "right": null
  },
  "right": {
    "id": "right_child",
    "left": null,
    "right": null
  }
}
```

The binary tree visualization will be displayed, with the deepest subtree highlighted in green.

![image](https://github.com/beccathomson/json-parser/assets/25671002/e9879b97-4ca0-4f82-a488-1396d11b3654)

You can interact with the tree by editing the JSON text on the page.

image.png

### Project Structure
- src/components/VisualTree.tsx: This component handles the rendering of the binary tree visualization. It uses the BinTreeNodeSquare component to render individual nodes and applies styling to highlight the deepest subtree.
- src/components/BinTreeNodeSquare.tsx: This component represents an individual node in the binary tree. It receives the node data and level as props and renders a square element with the node value.
- src/utils/BinaryParser.ts: This module provides utility functions for parsing and working with binary tree data. It includes the parseTree function for parsing JSON data into a binary tree structure.
- src/utils/SubtreeParser.ts: This module contains the logic for finding the deepest subtree in a binary tree and marking the nodes as part of the subtree.
- src/App.tsx: The main entry point of the application. It handles file uploads, manages the state, and renders the components.

### Testing
- Unit tests have been implemented for the main methods of BinaryParser and SubTreeParser
- To run the tests, use the following command:
npm test
