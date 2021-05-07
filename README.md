<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/string-progressbar"><img src="https://i.ibb.co/HHXtHf3/string-progressbar.png" width="546" alt="progressbar" /></a>

  </p>
  <br />
  <p>
    <a href="https://discord.gg/tGkbpCD"><img src="https://discord.com/api/guilds/389745592232050688/embed.png" alt="Discord server" /></a> <a href="https://www.npmjs.com/package/string-progressbar"><img src="https://img.shields.io/npm/dt/string-progressbar.svg?maxAge=3600" alt="NPM downloads" /></a>

</p>
</div>

## About

**String Progressbar** is a customizable progress bar generator manily made for discord bots that are made in [Discord.js](https://discord.js.org/) and [Eris](https://abal.moe/Eris/). It generates string so its pretty much usable everywhere.

## Advantages

* Simple
* Lightweight
* Fully customizable
* 2 Different Styles

 ## Installation

``` sh
npm install string-progressbar
```

 ## Splitbar Usage
 
![](https://i.ibb.co/5Yz89gM/splitbar.png)

``` js
const progressbar = require('string-progressbar');
// Assaign values to total and current values
var total = 100;
var current = 50;
// First two arguments are mandatory
progressbar.splitBar(total, current, [options]);
// Returns: Array<String, String>
```

 ## Filledbar Usage
 
![](https://i.ibb.co/ctTB8mp/filledbar.png)

``` js
const progressbar = require('string-progressbar');
// Assaign values to total and current values
var total = 100;
var current = 50;
// First two arguments are mandatory
progressbar.filledBar(total, current, [options]);
// Returns: Array<String, String>
```

## Optional Parameters

|Parameter name|     Type|    Default|                         Description|
|--------------|     ----|    :-----:|    --------------------------------|
|size|            Integer|         40|    Determines the length of the bar|
|line|             String|    ▬ and □|    Determines the Static part of the bar|
|slider|           String|   🔘 and ■|    Determines the Progressive part of the bar|


## Links

* [Discord Support](https://discord.gg/tGkbpCD)
* [Npm package](https://www.npmjs.com/package/string-progressbar)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/sparker-99/string-progressbar/blob/master/LICENSE) licensed.