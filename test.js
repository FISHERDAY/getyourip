const os = require('os');
//const http = require('http');

exports.getLocalIp = function() {
    let obj = os.networkInterfaces();
    let values = Object.values(obj)[0];
    for (const currentValue in values) {
        if (values[currentValue].family === 'IPv4' && values[currentValue].internal === false) {
            return (values[currentValue].address === undefined ? '0.0.0.0' : values[currentValue].address);
        }
    }
}

/*function getPublicIp() {
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
        resp.on('data', function(ip) {
            console.log(ip === undefined ? '0.0.0.0' : ip.toString());
        });
    });
}*/