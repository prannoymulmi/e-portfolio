# Dev   [![GitHub](https://img.shields.io/github/license/mayankagarwal09/dev-portfolio?color=blue)](https://github.com/mayankagarwal09/dev-portfolio/blob/master/LICENSE.md) ![visitors](https://visitor-badge.glitch.me/badge?page_id=mayankagarwal09.dev-portfolio&color=blue)

## A minimal portfolio template for Developers!

<h2 align="center">
  <img src="https://github.com/mayankagarwal09/dev-portfolio/blob/master/images/dev-portfolio.gif" alt="Dev LICS" />
  <br>
</h2>

## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ Made with React\
⚡️ Fully Responsive\
⚡️ Easily Customizable\
⚡️ Well organized documentation

## Why do you need a portfolio? ☝️

- Professional way to showcase your work
- Increases your visibility and online presence
- better chance of getting work opportunity

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

## Setup 🔧

From your command line, first clone Dev:

```bash
# Clone the repository
$ git clone https://github.com/mayankagarwal09/dev-portfolio

# Move into the repository
$ cd dev-portfolio

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install --force

# Start the development server
$ npm start
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file if exists before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn start
```

Once your server has started, go to this url `http://localhost:3000/` to see the portfolio locally.
The page will reload if you make edits.

---
## Using React to deploy the SPA in Github pages

The dependency `https://github.com/gitname/react-gh-pages` is used to deploy the react SPA easily in the Github pages.
In the package.json the predeploy, deploy, and postbuild steps must be added. Additionally in homepage package must be added as well in the package.json.

```package.json
"homepage": "https://prannoymulmi.github.io/e-portfolio",
"scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    "postbuild": "ln -s index.html build/404.html"
}
```

## Deployment using Github Actions

The deployment happens automatically using the continuous deployment using Github actions 

## Credit
- Credit to **Mayank Agarwal** - [https://github.com/mayankagarwal09](https://github.com/mayankagarwal09).

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

