 // YAN - Yet another network using node.js
/** user.js   
 * this file exports a user object to abstract the use of MongoDB
 */
 var mymongodb=require("mongojs");

var databaseUrl = "yan"; // "username:password@example.com/mydb"
var collections = ["users", "likables"]
var db = mymongodb.connect(databaseUrl, collections);

MongoUser=function(){
  return this;
};
/** function findUser - finds a user with specified criteria
  * parameters:
  *   criteria: a json array of fields to use for filtering (like username/password)
  *   callback: callback on success
  */
MongoUser.prototype.findUser = function(criteria,callback) {
		db.users.find(criteria, function(err, users) {
			  if( err || !users.length) {
			  	callback(null);
			  } 
			  else users.forEach( function(users) {
				callback(users);
			  })
										   
		} );
};
/** function listUsers - returns a list of registered users */
MongoUser.prototype.listUsers = function(callback) {
			var content=''
		db.users.find({}, function(err, users) {
			  if( err || !users.length) {
			  	callback(null);
			  } 
			  else users.forEach( function(usr) {
				 content =  content +'<li>' + usr.firstname + ' ' + usr.lastname + "</li>\n";
			  })
			  callback(content)				   
		} );
};

/** function addUser - adds a user to the database, takes a user object, 
 *an on success callback and an onfailure callback returns nothing because of asynchronous calls, makes no sense
*/
MongoUser.prototype.addUser = function(user,onSuccess,onFailure) {
	db.users.save(user, function
	(err, isSaved) {
	  if( err || !isSaved ) {
		  onFailure();
		  console.log("User not saved");
	  }
	  else {
		  onSuccess()
		  //console.log("User saved");
	  }
	});
}


myuser=new MongoUser();

exports.user=MongoUser;

