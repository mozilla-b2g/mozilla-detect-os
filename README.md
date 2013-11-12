mozilla-detect-os
=================

Detect the correct operating system name for your computer (for mozilla downloads)


## Usage via node apis

```js
var myOS = require('mozilla-detect-os')(); // something like 'mac' or 'linux_x86-64'
```

## via CLI (if you installed it via npm install -g)

```sh
echo "I like my $(mozilla-detect-os) becuase it runs firefox"
# I like my mac becuase it runs firefox
```
