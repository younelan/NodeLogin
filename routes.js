 // YAN - Yet another network using node.js
/** routes.js 
 * this file has the routes for all get/post requests
 */ 
var fs=require("fs"), 
    usr=require("./user").MongoDB,
    theme_engine=require("./template_helper"),
	form_validation=require("./form_helper"),
    template=theme_engine.templateHelper;

var theme=template.currentTheme;

var SiteConfig = {
	'site_name':'Social Fun Zone',
	'site_motto':'Bringing people together',
	'utility_menu':"<li><a href='/profile'>Profile</a></li><li><a href='/logoff'>Log off</a></li>",
	'main_menu':"<li><a href='/'>Home</a></li><li><a href='/people'>People</a></li><li><a href='/messages'>Messages</a></li>"
}

/** function index 
 * renders a homepage
 */
exports.index = function(req, res){
	   req.session.visitCount = req.session.visitCount ? req.session.visitCount + 1 : 1;
	   console.log(req.session.visitCount);
	   console.log(req.session.user)
	   if(req.session.user)
	   {
       		showMemberArea(req,res,isLoggedIn)	
	   }
       else
       {
       		showLogin(req,res)																					      	
       }
};

/** function showLogin 
 *this shows a login form
 *unlike other functions, this is not a route. called by index
 */
function showLogin(req,res) 
{
	var loginform='';
	var myvars={
		'sidebar1':template.render('includes/loginform.html',{}),
		'content':template.render('includes/welcome.html',{}),
		'sidebar1_title':'',
		'sidebar2_title':'',
		'sidebar2':function() {
			var sidebar2='Feel free to change the theme too:<br />';
			for(currentTheme in template.activeThemes ) {
			  sidebar2=sidebar2+"<a href=/settheme/"+currentTheme+'>'+template.activeThemes[currentTheme]+'</a><br>';
			}
			return sidebar2;
		}(),
		'themepath': '/styles/' + template.currentTheme ,
		'site_name': SiteConfig.site_name,
		'site_motto':SiteConfig.site_motto,
	};
	
	view=template.render('styles/'+ template.currentTheme +'/index.tpl',myvars);
	res.end(view);

}
/** function showForm 
 *this shows a registration form ... empty or filled with values
 *unlike other functions, this is not a route
 */
function showForm(req, res,userInfo){
    var loginform='';
	var myvars={
		'sidebar1':'Join the community. fill in the form and participate.',
		'content':template.render('includes/registerform.html',userInfo),
		'sidebar1_title':'',
		'sidebar2_title':'',
		'sidebar2':function() {
			var sidebar2='';
			for(currentTheme in template.activeThemes ) {
			  sidebar2=sidebar2+"<a href=/settheme/"+currentTheme+'>'+template.activeThemes[currentTheme]+'</a><br>';
			}
			return sidebar2;
		}(),
		'themepath': '/styles/' + template.currentTheme ,
		'site_name': SiteConfig.site_name,
		'site_motto':SiteConfig.site_motto,
	};
	
	view=template.render('styles/'+ template.currentTheme +'/index.tpl',myvars);
	res.end(view);

};
/** function showRegisterSuccess
 *called when we succeeded in registering the user
 */
function showRegisterSuccess(req, res,userInfo){
    var loginform='';
	var myvars={
		'sidebar1':'Welcome to the community. You have been successfully added to the database, enjoy being with us',
		'content':template.render('includes/registersuccess.html',userInfo),
		'sidebar1_title':'',
		'sidebar2_title':'',
		'sidebar2':function() {
			var sidebar2='';
			for(currentTheme in template.activeThemes ) {
			  sidebar2=sidebar2+"<a href=/settheme/"+currentTheme+'>'+template.activeThemes[currentTheme]+'</a><br>';
			}
			return sidebar2;
		}(),
		'themepath': '/styles/' + template.currentTheme ,
		'site_name': SiteConfig.site_name,
		'site_motto':SiteConfig.site_motto,
	};
	
	view=template.render('styles/'+ template.currentTheme +'/index.tpl',myvars);
	res.end(view);

};
/** function showMemberArea
 *This function is called to show the members only page (currently the tetris game)
 */
function showMemberArea(req, res,userInfo){
    var loginform='';
	var myvars={
		'sidebar1':'<ul>' + SiteConfig.main_menu + '</ul>',
		'content':template.render('includes/tetris.html',userInfo),
		'sidebar1_title':'',
		'sidebar2_title':'',
		'utility_menu':SiteConfig.utility_menu,
		'main_menu':SiteConfig.main_menu,
		'sidebar2':function() {
			var sidebar2='';
			for(currentTheme in template.activeThemes ) {
			  sidebar2=sidebar2+"<a href=/settheme/"+currentTheme+'>'+template.activeThemes[currentTheme]+'</a><br>';
			}
			return sidebar2;
		}(),
		'themepath': '/styles/' + template.currentTheme ,
		'site_name': SiteConfig.site_name,
		'site_motto':SiteConfig.site_motto,
	};
	
	view=template.render('styles/'+ template.currentTheme +'/index.tpl',myvars);
	res.end(view);

};
/** function showPage
 *this shows a page to a member
 */
function showPage(req, res,params){
    var loginform='';
	var myvars={
		'sidebar1':'<ul>' + SiteConfig.main_menu + '</ul>',
		'content':template.render('includes/memberpage.html',params),
		'sidebar1_title':'',
		'sidebar2_title':'',
		'utility_menu':SiteConfig.utility_menu,
		'main_menu':SiteConfig.main_menu,
		'sidebar2':function() {
			var sidebar2='';
			for(currentTheme in template.activeThemes ) {
			  sidebar2=sidebar2+"<a href=/settheme/"+currentTheme+'>'+template.activeThemes[currentTheme]+'</a><br>';
			}
			return sidebar2;
		}(),
		'themepath': '/styles/' + template.currentTheme ,
		'site_name': SiteConfig.site_name,
		'site_motto':SiteConfig.site_motto,
	};
	
	view=template.render('styles/'+ template.currentTheme +'/index.tpl',myvars);
	res.end(view);

};
/** function listUsers - this will list all users
 */
exports.listUsers=function(req,res) {
	content=''
	content=myuser.listUsers(function(content) {
	showPage(req,res,{'content':content})

	})
}
/** function loginUser - this handles user registration
 * has input request and response objects
 */
exports.loginUser=function(req,res) {
	isLoggedIn=myuser.findUser({login: req.body.usrLogin,password:req.body.usrPassword},function(isLoggedIn) {
	   //console.log(isLoggedIn);
	   if(isLoggedIn)
	   {
       		showMemberArea(req,res,isLoggedIn)	
	  		req.session.user=isLoggedIn 	
			res.writeHead(301, {Location: '/'});
			res.end();
	   }
       	else
       		showLogin(req,res)																					
	});
}
/** function logoffUser - this handles user registration
 * has input request and response objects
 */
exports.logoffUser=function(req,res) {
	console.log('logging out')
	req.session.user=null	
    showLogin(req,res)	
	//res.writeHead(301, {Location: '/'});
	//res.end();
																				
}
/** function registerUser - this handles user registration
 * has input request and response objects
 */
exports.registerUser=function(req,res) {
	 userInfo={}

	 userFields={'firstname':'name','lastname':'name','email':'email','login':'username','password':'password'}
	 for(field in userFields)
	 {
		// console.log(req.body)
		 fieldType=userFields[field];
		 if(!req.body[field])
		 	fieldValue='';
		 else
		    fieldValue=req.body[field];
		 //iterate through all fields and filter them. eventually this should be a function of its own
		 switch(fieldType)
		 {
			 //yes, we should validate strings more
			 case 'name':
			 case 'password':
			 case 'string':
				(true)?userInfo[field]=fieldValue:userInfo[field]=""
				break;
			case 'number':
				var isValid=form_validation.isNumber(fieldValue);
				(isValid)?userInfo[field]=fieldValue:userInfo[field]=""
				break;
			case 'username':
				var isValid=form_validation.isUsername(fieldValue);
				(isValid)?userInfo[field]=fieldValue:userInfo[field]=""

				break;
			case 'email':
				var isValid=form_validation.isEmail(fieldValue);
				//output=field + ' ' + isValid;
				(isValid)?userInfo[field]=fieldValue:userInfo[field]=""
				break;
		 }
		 confirmationCode=form_validation.getRandomString();
		 userInfo['confirm']=confirmationCode;
	 }
	 //console.log(userInfo)
	 if(userInfo['email'].length && userInfo['login'].length && userInfo['firstname'] && userInfo['lastname'] && userInfo['password'].length>5)
	 {
		console.log("adding user")
		myuser.addUser({login:userInfo['login'],email:userInfo['email'],firstname:userInfo['firstname'],lastname:userInfo['lastname'],password:userInfo['password']},
				function() {
					showRegisterSuccess(req,res,req.body)
					console.log("success in add")
				},
				function() {
					 showForm(req,res,req.body)
				}	);																																				
	 }
	 else
	 {
		 console.log("Failed validation");
	 }
}
/** function registerForm 
 * this function shows a form to register a new user
 */
exports.registerForm=function(req,res)
{
	 userInfo={}
	 showForm(req,res,userInfo)
}

/** function settheme
 * this function changes the current theme - obviously this is open for demo purposes
 */
exports.setTheme=function(req,res) {
	if(template.activeThemes.hasOwnProperty(req.params.theme))
	{
		template.setTheme(req.params.theme);
	}
	exports.index(req,res);
}

/** styles function
 * basically a static http repository, the reason I am not using app.static is I want to later be able to have fine grained access restrictions
 * and protect from prying eyes
 */
exports.styles = function(req, res){
	//define accepted types
	var extensions= { 
		'txt':'text/plain',
		'swf':'application/x-shockwave-flash',
		'jpg':'image/jpeg',
		'gif':'image/gif',
		'png':'image/png',
		'jpeg':'image/jpeg',
		'css':'text/css',
		'js':'text/javascript'
	}
	//then check people are requested an active theme
	if(template.activeThemes.hasOwnProperty(req.params.theme))
	{
		var myTheme=req.params.theme;
	}
	else
	{
		res.end('<h1>File not available</h1>Something went wrong');
		return;
	}

	//then check it is an accepted type (we dont want to give away template files)
	filename=req.params.file;
	fileExtension=(''+req.params.file).split('.').pop();

	if(extensions.hasOwnProperty(fileExtension))
		mimeType=extensions[fileExtension];

    //if we made it this far woohoo, send the file out
	if(mimeType)
	{
		fs.readFile('styles/' + myTheme + '/' +filename,"binary",function(err,file) {
		  if(err) {
			res.writeHead(500, {"Content-Type": "text/html"});
			res.end("<h1>File not available</h1>Something went wrong<br>\nTried to get : " +'styles/' + myTheme + '/' +filename);
			return;
		  }
		  res.writeHead(200,{"Content-Type": mimeType});
		  res.end( file,"binary");
		});
	}

}