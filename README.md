# getipinfotest

A tiny node.js module to getting your local ip adress.

## Installation

### npm

```sh
npm install getyourip
```

### git

```shell
git clone https://github.com/FISHERDAY/getyourip
```

## Usage

Get your local ip address immediately.

```js
let ip = require('getyourip');

console.log(ip.getLocalIp());
//=> '192.168.1.108'
```

## API

### getLocalIp()

Returns a `<string>` with your private IPv4 address.

## About
Module uses `os.networkInterfaces()` method from built-in Node.js module `os` which returns an object containing network interfaces that have been assigned a network address. Than it gets the local IP address by checking `.family` and `.internal` properties.
