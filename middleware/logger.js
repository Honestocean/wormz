const myLogger = function(req, res, next){
    console.log('yoyoyo this is a logger, consider your ass logged')

    next();
}

module.exports = myLogger;