
Egyptian national identity [![NPM version](https://img.shields.io/npm/v/egyptian-nationalid.svg?style=flat-square&color=informational)](https://npmjs.com/package/egyptian-nationalid)
====

Egyptian national identity checker and data extraction from the Egyptian national identity

Installing
----------
Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/) / [bun](https://bun.sh/):
```sh
npm install egyptian-nationalid
yarn add egyptian-nationalid
pnpm add egyptian-nationalid
bun install egyptian-nationalid
```

Usage
-----------------
Using [Node.js](https://nodejs.org/) `require()`
```js
const { getInformation, isValid } = require('egyptian-nationalid');
```
[TypeScript](https://www.typescriptlang.org/)/ES Module support
```ts
import { getInformation, isValid } from 'egyptian-nationalid';
```
[Deno](https://deno.land)
```js
import { getInformation, isValid } from 'https://esm.sh/egyptian-nationalid';
```
Example
-----------------
```js
/*
    To get information from the Egyptian national id
*/
console.log(getInformation("27510120200771"))//To get the Egyptian national id information in English by default
console.log(getInformation("28309102300111",  "arabic"))//To get the Egyptian national id information in Arabic 

/*
    To check whether this is a valid national id or not
*/
console.log(isValid("28309102300111"))// If it is valid it will return true
console.log(isValid("83091024300111"))// If it is not valid, it will return false
```

getInformation data
-----------------
English:
```js
{
  type: 'Male',
  century: '19',
  age: 47,
  national_id: '27510120200771',
  birthday: {
    text: '1975/10/12',
    date: 1918-03-28T22:00:00.000Z,
    day: '12',
    month: '10',
    year: '1975'
  },
  governorate: 'Alexandria'
}
```

Arabic:
```js
{
  type: 'ذكر',
  century: '19',
  age: 47,
  national_id: '27510120200771',
  birthday: {
    text: '1975/10/12',
    date: 1918-03-28T22:00:00.000Z,
    day: '12',
    month: '10',
    year: '1975'
  },
  governorate: 'الإسكندرية'
}
```
For more details about how the package works you can [click here](https://ar.wikipedia.org/wiki/%D8%A8%D8%B7%D8%A7%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9#%D9%88%D8%B5%D9%81_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A) to see how the package works


If you have a problem or have a suggestion
------------
- Contact With Me Discord: [`Shuruhatik#2443`](https://github.com/shuruhatik)
- [Github](https://github.com/shuruhatik) | [Youtube](https://www.youtube.com/@shuruhatik) | [My Website](https://www.shuruhatik.com/)

License
-------

Refer to the [LICENSE](LICENSE) file.