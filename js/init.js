/** ³õÊ¼»¯Ä£¿é **/

define(function(require,exports){

    var
        move = require('../js/startMove.js').Move;

    window.onload = function(){
        var oDiv = document.getElementById('div1');
        move.startMove(oDiv,{width:300,height:300,opacity:100});
    }
    //console.info(move);
});