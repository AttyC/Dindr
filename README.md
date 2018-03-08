 # Setup

 ```
 npm init
 npm install --save express
 npm install --save mongodb
 npm install --save react react-dom
 npm install --save-dev webpack
 npm install -D babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react
 npm install -D nodemon
 npm i -D eslint eslint-plugin-react babel-eslint
```

create folders 'api', 'src', 'public'
create files 'api/index.js', 'src/index.js', 'public/index.html', './server.js', './config.js'

## config.js

```
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  port: env.PORT || 3001
};
```
## server.js

```
import config from './config';
import express from 'express';
const server = express();

server.get('/', (req, res)=>{
    res.send('hello');
})

server.listen(config.port);
```

## .babelrc

```
{
    "presets": ["react", "es2015", "stage-2"]
}
```

## .eslintrc.js

```

module.exports = {
    "parser": 'babel-eslint',
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": [ "react" ],
    "rules": {
      "indent": ["error", 2],
      "linebreak-style": ["error","unix"],
      "quotes": ["error","single"],
      "semi": ["error","always"],
      "no-console": ["warn", { "allow": ["info", "error"] }]
    }
  };
```


## webpack.config.js

```
module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }
  };

```



## package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --exec babel-node server.js --ignore public/",
    "dev": "webpack -wd"
  }
```
# Running server

To run server with babel support

```
./node_modules/.bin/babel-node server.js
```

Or

```
npm start
```

Running server without babel

```
node server.js

```

## extras

To run './node_modules/.bin/babel-node server.js' as 'babel-node server.js'.

```
vim ~/.bash_profile
```

And

```
export PATH=$PATH:./node_modules/.bin
```

Then restart terminal.

# Step 2

## api/index.js

Create routing for api calls.
```
import express from 'express';
const router = express.Router();

router.get('/', (req, res)=>{
    res.send({data: []});
})

export default router;
```

## server.js

Implement apiRouter previously created. And set server to use 'public' folder for static html files; also change view engine to ejs templates.

```
import apiRouter from './api';
server.set('view engine', 'ejs');
```
Place this below your server.get functions else it loads public index.html file.
```
server.use(express.static('public'));
```
