# getyourip

A tiny node.js module to get your local and public ip adresses.

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

Get your local and public ip addresses immediately.

```js
let ip = require('getyourip');

console.log(ip.getLocalIp());
//=> '192.168.1.108'

console.log(await ip.getPublicIp());
//=> '77.120.70.179'
```

## API

### getLocalIp()

Returns a `<string>` with your private IPv4 address.

### getPublicIp()

Returns a Promise<string> with your public IPv4 address.

## About
Module uses `os.networkInterfaces()` method from built-in Node.js module `os` to get local ip. It returns an object containing network interfaces that have been assigned a network address. Than it gets the local IP address by checking `.family` and `.internal` properties. To get public ip module uses `http.get(url[, options][, callback])` method from built-in Node.js module `http` which sends a request to `api.ipify.org`.