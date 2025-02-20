# useEffect Cleanup Function Error in React
This repository demonstrates a common error in React's `useEffect` hook: the incorrect handling of the cleanup function.

The `bug.js` file contains code with an error in the `useEffect` hook's cleanup function. This can lead to memory leaks or unexpected behavior when the component unmounts.

The `bugSolution.js` file shows the corrected code, demonstrating the proper way to use cleanup functions in `useEffect`. 

## Problem
The bug lies in the `useEffect` hook, specifically how the cleanup function is implemented.

## Solution
The corrected code in `bugSolution.js` shows how to use the return function effectively to prevent issues related to cleanup operations.

## How to run
1. Clone the repository
2. Navigate to the repository's directory
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development server
