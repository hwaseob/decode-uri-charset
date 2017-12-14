
var iconv = require('iconv-lite');

var re = /%([a-f0-9]{2})/gi;

var url_decode = function (str, charset) {
    var result;
    var i = 0;
    var ar = [];
    while ((result = re.exec(str)) !== null) {
        while (i < result.index)
        {
            ar.push(str.charCodeAt(i++));
        }
        i = re.lastIndex;
        ar.push(parseInt(result[1], 16));
    }

    var b = Buffer.from(ar);
    return iconv.decode(b, charset || 'utf8').toString();
};

module.exports = url_decode;
