'use strict';

(function (module){
  var a = 5;

  function flerg(){
    console.log('the blerg');
    var b = 10;
  };

  module.flerg = flerg;
}
)(window);
