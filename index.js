const os = require('os');
const http = require('http');
const IPv4 = 'IPv4';

exports.getLocalIp = function() {
    let obj = os.networkInterfaces();
    let [values] = Object.values(obj);
    for (const currentValue in values) {
        if (values[currentValue].family === IPv4 && values[currentValue].internal === false) {
            return (values[currentValue].address === undefined ? '0.0.0.0' : values[currentValue].address);
        }
    }
}

exports.getPublicIp = function() {
    return new Promise(function(resolve, reject) {
        http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                resolve(ip === undefined ? '0.0.0.0' : ip.toString());
            });
        });
    });
}
