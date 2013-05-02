// JavaScript Document
var HOSTNAME = 'http://192.168.1.137/emoservice/service';
var tokenKey = '';
var userName = '';
var fullName = '';
var dataResult = null;
function SignIn(){};
	
	SignIn.prototype.submitForm = function(){
		packageBuild = new PackageBuilder();
		//console.log('sumitForm');
		username = $('#username').val();
		password = $('#password').val();
		$.ajax({
			type:'post',
			url:HOSTNAME,
			data:packageBuild.singin(username,password),
			success: function(data){
				alert(data);
				navigator.notification.alert('ยินดีต้อนรับ คุณ ',alertDismissed, 'message','Done');
				}
			});
		/*$.post(HOSTNAME,packageBuild.singin(username,password),function(data){
			packageExtractor(data);
			
			
		});*/
		
		
	};
		
		
function packageExtractor(dataPackage){
		obj = jQuery.parseJSON(dataPackage);
		$.each(obj,function(key,val){
			if (key == 'data'){
				dataResult = val;
				$.each(val,function(key,val){
					//console.log(val);
					});
			}else if (key =='serviceName'){
				//console.log('seviceName'+val);
			} else{
				tokenKey = val;
			}
		});
}
	


function PackageBuilder(){};
	
	PackageBuilder.prototype.singin = function(username,password){
		//console.log('PackageBulder');
		serviceName = 'signIn';
		//{"serviceName":"signIn","params":{"username":"1","password":"asd"},"tokenKey":""}
		package ='jsonPackage={"serviceName":"'+serviceName+'","params":{"username":"'+username+'","password":"'+password+'"},"tokenKey":"'+tokenKey+'"}';
		//console.log(package);
		return package;
	}
	
	
	
function alertDismissed() {
    // do something
}





	
	
		
