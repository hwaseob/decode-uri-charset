## URI Decoder for with non UTF-8 encoded string

## Usage
### Basic API
```javascript
var url_decode = require('decode-uri-charset');

console.log(url_decode('%C7%CF%C0%CC', 'euc-kr'))
```