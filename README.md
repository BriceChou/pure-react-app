<!-- @format -->

# pure-react-app

Just create pure react app without any others components. I'll tell you how to create a pure react ?

## Introduction

Before you start to build a pure react app, remind to watch console output every time. Even `warn` output in NODE console, you should care it. Like that:

- `WARN`

```bash
WARN node unsupported "node@v7.9.0" is incompatible with babel-loader@8.1.0 › webpack@4.43.0 › watchpack@1.7.2 › chokidar@3.4.0 › readdirp@~3.4.0, expected node@>=8.10.0
```

- `deprecate`

```bash
deprecate babel-loader@8.1.0 › webpack@4.43.0 › watchpack@1.7.2 › watchpack-chokidar2@2.0.0 › chokidar@^2.1.8 Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
```

- `Error`

```bash
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! bricechou.github.io@1.0.0 build: `webpack`
npm ERR! Exit status 1
```

You should always guarantee that your `NPM` version is acceptable with plugin package version.

### Node

- install node and npm, node website: <https://nodejs.org/en/>
- change npm registry link to cnpm: <https://developer.aliyun.com/mirror/NPM?from=tnpm>
- config package.json, see: <https://docs.npmjs.com/files/package.json>

### Webpack

How to quickly use webpack steps by steps: <https://webpack.js.org/concepts/>

```bash
npm install --save-dev webpack webapck-cli
```

Remember: Do not crate a webpack.config.js file by yourself.

### Babel

The compiler for next generation JavaScript. <https://babeljs.io>

- '@babel/core': core for babel
- '@babel/preset-env': parset for es6, es2017 etc.
- '@babel/preset-react': parset for react.
- 'babel-loader': core compile loader for js
- 'css-loader': core compile loader for css
- 'file-loader': core compile loader for images, fonts
- 'style-loader': core compile insert css style link into html, need to use this loader before css loader.

### ESLint

How to add eslint for javascript: <https://eslint.org/>

You can try it with global install `eslint` without other config. Then you can just try it on your react project.

We recommand you use the command `eslint --init` to initialize your config file.

It's easy to use and you can select your best practice. Let's make your team or yourself have the same code style.

### TypeScript

How to add typescript in your project: <https://www.typescriptlang.org>

How to add ts into react app : <https://github.com/Microsoft/TypeScript-React-Starter>

config for babel with ts: <https://github.com/basarat/typescript-react/tree/master/01%20bootstrap>

```bash
npm install -D typescript @types/react @types/react-dom ts-loader
```

Then you can add tsconfig file into your project. Let's do it like that: <https://github.com/microsoft/TypeScript-React-Starter/blob/master/tsconfig.json>

```json
{
  "compilerOptions": {
    "outDir": "build/dist",
    "module": "commonjs",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDir": "src",
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  },
  "exclude": ["node_modules", "build", "scripts", "acceptance-tests", "webpack", "jest", "src/setupTests.ts"],
  "types": ["typePatches"]
}
```

Now we can add `TypeScrip ESLint` configure into your project, how to config it : <https://github.com/typescript-eslint/typescript-eslint>

If you don't use `ESLint`. Also, you can select `TSLint`.
