# Require All as Array Recursively

## Installation

```
npm install require-all-as-array-recursively
```

## Usage

```
const requieAll = require('require-all-as-array-recursively')

const modules = requireAll(__dirname + '/somedir')
// `modules` is an array of all required modules
``` 

## API

### requireAll

```
(dir: String, Filter) => Any[]

Filter ~ RegEx | (file: String) => Boolean
```

## License

MIT
