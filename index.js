module.exports = function(sails) {

    var setup = require('./lib/setup.js');
   // var init = require('./lib/init.js');
    
    gladys.on('ready', function(){
        setup();
    });

    return {
      setup
      //init
    };
};