/**
 * @author JangJeongSik
 * @version 0.1
 * @description pure website templates
 */

var RAW = (function(){
    var initialize = function(){
        this.component = this.component || {};
    };
    var component = function(componentId, callback){
        if(componentId !== 'string'){
            throw new Error('컴포넌트 이름이 문자열이 아닙니다.');
        }

        loadComponent(componentId, callback);
    };

    var loadComponent = function(componentId, callback){
        if(document.getElementById(componentId)){
            return;
        }

        var script,
            head,
            loaded = false,
            type = 'text/javascript',
            charset = 'utf-8',
            src = './components/' + componentId + '/' + componentId + '.js';

        head = document.getElementsByTagName('head')[0];
        script = document.createElement('script');

        script.type = type;
        script.charset = charset;
        script.src = src;
        script.id = componentId;

        script.onreadystatechange = function(){
            if(loaded){
                return;
            }
            loaded = true;
            callback();
        };

        script.onload = function(){
            callback();
        };

        head.appendChild(script);
    };

    var util = {
        isString : function(s){
            if(typeof s !== 'string'){
                return false;
            }
        },

        isEmpty : function(o){
            var isEmptyObject = function(o){
                var prop;

                for(prop in o){
                    if(obj.hasOwnProperty(prop)){
                        return false;
                    }
                    return true;
                }
            };

            var isEmptyArray = function(o){
                if(o.length == 0){
                    return false;
                }

                return true;
            };

            var isEmptyString = function(o){
                if(o.length != 0 || o !== '' || o !== null || o !== undefined){
                    return false;
                }
                return true;
            };

            var type = typeof o,
                check = {
                    object : isEmptyObject,
                    array : isEmptyArray,
                    string : isEmptyString
                }[type];

            return check(o);
        }
    };

    return (function(){
        initialize();

        return {
            component : component,
            util : util
        }
    }());
}());
