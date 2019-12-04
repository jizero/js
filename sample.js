/**
jizero
2019.12.04
**/


// common Utils
(function ($) {
		$.jizero = {
	        utilTest:function(){
                alert('test');
            }
		}

        $.fn.convertLang =  function(options){        
            var defaultsOption = {
                obj : $(this)
            }
            var options = $.extend({},defaultsOption ,options);
        }
})(jQuery);


// controller
var Jizero = function() {
    this.setting = {
        language : 'ko',
        nowDate : '2019-12-04',
    }

    this.langData = {};
    
    this.init = function(){
        console.log(this.setting.language);    
        this.handler();
    }
    this.handler = function(){
        alert("load and Click!");
    }
    this.getList = function(){
        console.log(this.langData.email_error);
        return privateCall();
    }
    this.ajaxTest = function (){
      
        var that = this;
        $.ajax({
            type: 'POST',
            url: that.ajaxSetting.apiUrl,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
            
            },
            error: function () {
            }
        });


    }

    var ajaxSetting = {
        apiUrl : 'http://jizeroapi.xxx.co/api/v2/account',
        page : 5,
        limit : 5
    }  
    var privateCall = function() {

        console.log(ajaxSetting.apiUrl);
        alert(this.langData.email_error);

    }
     this.init();

}


//use 
var jizeroController =new Jizero();
jizeroController.langData =  {"email_error":"This email is already in use."};
jizerotController.getList();





