# SQL Editor

### [Live Version](https://sagarchoudhary96.github.io/react-sql-editor/)

A Web App For Basic SQL editor view to demonstrate where users can query easily on a table using SQL and have ui components for the functionalities that can be added.

## Requirements

- yarn

## Libraries Used

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [React-Ace](https://github.com/securingsincity/react-ace)

## How to run:

1. [Download](https://github.com/sagarchoudhary96/react-sql-editor/archive/refs/heads/master.zip) or [Clone](https://github.com/sagarchoudhary96/react-sql-editor.git) the Repository.
2. Run `yarn install` to install the project dependencies.

3. Run `yarn start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## Page Load Time

Page Load TIme has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![img](https://user-images.githubusercontent.com/16102594/121433865-29e5ba80-c99a-11eb-84de-9043ecffc072.png)

### Steps taken to Optimize

1. There was render blocking javascript for google font causing delay, used method mentioned [here](https://pagespeedchecklist.com/asynchronous-google-fonts) to overcome the problem.

2. Import for `react-ace` editor was long tasks running during page load, Converted it to Lasy loaded component using `React.lazy()` for code-splitting and delaying it's loading.

3. Only importing used Module in a component from library rather than importing whole library.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).
