# JSON Parser for Binary Trees

This repository contains a solution for a coding assignment given by Microsoft for a frontend engineer position. The assignment involves parsing JSON data into a binary tree data structure and creating a web application to visualize the tree.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Testing](#testing)

## Installation

To install and run this project, you will need Node.js and npm installed on your machine. Follow these steps:

1. Clone this repository:
   ```
   git clone https://github.com/beccathomson/json-parser.git
   ```
2. Navigate into the project directory:
   ```
   cd json-parser
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

The application should now be running at `http://localhost:3000`.

![image](https://github.com/beccathomson/json-parser/assets/25671002/e9879b97-4ca0-4f82-a488-1396d11b3654)


## Usage

The application allows you to input JSON data in a specific format and displays the corresponding binary tree. The input data should be an array representing a binary tree, where each element is a triplet `[id, leftChild, rightChild]`.

For example, the input `["a", ["b"], ["c"]]` represents a binary tree with root "a" and two children "b" and "c".

You can input the data manually or upload a file containing the data. The application will parse the data and display the binary tree. You can also edit the JSON data and the tree will update in real time.

## Testing

To run the tests for this project, use the following command:

```
npm test
```

---