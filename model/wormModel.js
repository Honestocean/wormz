const path = require("path");

const getWormImage = function(){
    return path.join(__dirname, "../download.png");
}

module.exports = getWormImage;