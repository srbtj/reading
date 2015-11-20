/** 时间版运动框架 **/

/** default style **/
//function getStyle(obj,attr){
//    if(obj.currentStyle){
//        return obj.currentStyle[attr];
//    }else{
//        return window.getComputedStyle(obj,null)[attr];
//    }
//}

define(function(request,exports){

    /** move **/
    function Move(){};

    Move.prototype = {
        constructor : Move,
        startMove : function(obj,options,fn){

            clearInterval(obj.timer);
            var that = this;
            obj.timer = setInterval(function(){
                /** 循环结束的标志 */
                var flag = true;
                for(var attr in options){
                    /** 属性初始值 **/
                    var curVal = 0;
                    if(attr === 'opacity'){

                        curVal = Math.round( parseFloat( that.getStyle(obj,attr) )  * 100 ) || 100;
                    }else{

                        curVal = parseInt(that.getStyle(obj,attr)) || 0;
                    }
                    /** 设置摩擦系数 **/
                    var iSpeed = (options[attr] - curVal)/8;
                    iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

                    if(curVal != options[attr]){
                        flag = false;
                    }

                    if(attr === 'opacity'){
                        obj.style.filter = 'alpha(opacity='+(curVal + iSpeed)+')';
                        obj.style.opacity = (curVal + iSpeed)/100;
                    }else{
                        obj.style[attr] = curVal + iSpeed + 'px';
                    }
                }

                if(flag){
                    clearInterval(obj.timer);
                    fn && fn.call(obj);
                }
            },30);
        },
        getStyle : function(obj,attr){
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            }else{
                return window.getComputedStyle(obj,null)[attr];
            }
        }
    };

    exports.Move = new Move();
    /** default style **/
    //function getStyle(obj,attr){
    //    if(obj.currentStyle){
    //        return obj.currentStyle[attr];
    //    }else{
    //        return window.getComputedStyle(obj,null)[attr];
    //    }
    //}
});