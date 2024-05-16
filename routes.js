const fs = require("fs");
const { myuser } = require("./user");
const { templateHelper } = require("./template_helper");
const formHelper = require("./form_helper");

//const { UserManager } = require("./userManager");

class Routes {
	constructor() {
		//this.userManager = new UserManager(); // Initialize UserManager instance
		this.userManager = new MongoDB
	}

	async index(req, res) {
		try {
		req.session.visitCount = req.session.visitCount ? req.session.visitCount + 1 : 1;
		console.log(req.session.visitCount);
		console.log(req.session.user);
		if (req.session.user) {
			this.showMemberArea(req, res);
		} else {
			this.showLogin(req, res);
		}
		} catch (error) {
		console.error("Error occurred in index route:", error);
		// Handle error
		}
	}

	async showLogin(req, res) {
		try {
		const myvars = {
			sidebar1: templateHelper.render('views/loginform.html', {}),
			content: templateHelper.render('views/welcome.html', {}),
			sidebar1_title: '',
			sidebar2_title: '',
			sidebar2: (function () {
			let sidebar2 = 'Feel free to change the theme too:<br />';
			for (const currentTheme in templateHelper.activeThemes) {
				sidebar2 = sidebar2 + "<a href=/settheme/" + currentTheme + '>' + templateHelper.activeThemes[currentTheme] + '</a><br>';
			}
			return sidebar2;
			})(),
			themepath: '/styles/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};

		const view = templateHelper.render('styles/' + templateHelper.currentTheme + '/index.tpl', myvars);
		res.end(view);
		} catch (error) {
			console.error("Error occurred in showLogin route:", error);
			// Handle error
		}
	}

	async showForm(req, res) {
		try {
		const userInfo = {};
		const myvars = {
			sidebar1: 'Join the community. Fill in the form and participate.',
			content: templateHelper.render('views/registerform.html', userInfo),
			sidebar1_title: '',
			sidebar2_title: '',
			sidebar2: (function () {
			let sidebar2 = '';
			for (const currentTheme in templateHelper.activeThemes) {
				sidebar2 = sidebar2 + "<a href=/settheme/" + currentTheme + '>' + templateHelper.activeThemes[currentTheme] + '</a><br>';
			}
			return sidebar2;
			})(),
			themepath: '/styles/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};
	
		const view = templateHelper.render('styles/' + templateHelper.currentTheme + '/index.tpl', myvars);
		res.end(view);
		} catch (error) {
		console.error("Error occurred in showForm route:", error);
		// Handle error
		}
	}
	

	async showMemberArea(req, res) {
		try {
		const myvars = {
			sidebar1: '<ul>' + SiteConfig.main_menu + '</ul>',
			content: templateHelper.render('views/tetris.html', {}),
			sidebar1_title: '',
			sidebar2_title: '',
			utility_menu: SiteConfig.utility_menu,
			main_menu: SiteConfig.main_menu,
			sidebar2: (function () {
			let sidebar2 = '';
			for (const currentTheme in templateHelper.activeThemes) {
				sidebar2 = sidebar2 + "<a href=/settheme/" + currentTheme + '>' + templateHelper.activeThemes[currentTheme] + '</a><br>';
			}
			return sidebar2;
			})(),
			themepath: '/styles/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};

		const view = templateHelper.render('styles/' + templateHelper.currentTheme + '/index.tpl', myvars);
		res.end(view);
		} catch (error) {
		console.error("Error occurred in showMemberArea route:", error);
		// Handle error
		}
	}


	async showRegisterSuccess(req, res, userInfo) {
		try {
		const myvars = {
			sidebar1: 'Welcome to the community. You have been successfully added to the database, enjoy being with us',
			content: templateHelper.render('includes/registersuccess.html', userInfo),
			sidebar1_title: '',
			sidebar2_title: '',
			sidebar2: (function () {
			let sidebar2 = '';
			for (const currentTheme in templateHelper.activeThemes) {
				sidebar2 = sidebar2 + "<a href=/settheme/" + currentTheme + '>' + templateHelper.activeThemes[currentTheme] + '</a><br>';
			}
			return sidebar2;
			})(),
			themepath: '/styles/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};
	
		const view = templateHelper.render('styles/' + templateHelper.currentTheme + '/index.tpl', myvars);
		res.end(view);
		} catch (error) {
		console.error("Error occurred in showRegisterSuccess route:", error);
		// Handle error
		}
	}
	

	async showPage(req, res, params) {
		try {
		const myvars = {
			sidebar1: '<ul>' + SiteConfig.main_menu + '</ul>',
			content: templateHelper.render('includes/memberpage.html', params),
			sidebar1_title: '',
			sidebar2_title: '',
			utility_menu: SiteConfig.utility_menu,
			main_menu: SiteConfig.main_menu,
			sidebar2: (function () {
			let sidebar2 = '';
			for (const currentTheme in templateHelper.activeThemes) {
				sidebar2 = sidebar2 + "<a href=/settheme/" + currentTheme + '>' + templateHelper.activeThemes[currentTheme] + '</a><br>';
			}
			return sidebar2;
			})(),
			themepath: '/styles/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};
	
		const view = templateHelper.render('styles/' + templateHelper.currentTheme + '/index.tpl', myvars);
		res.end(view);
		} catch (error) {
		console.error("Error occurred in showPage route:", error);
		// Handle error
		}
	}
	

	async listUsers(req, res) {
		try {
		const content = await myuser.listUsers();
		this.showPage(req, res, { content });
		} catch (error) {
		console.error("Error occurred in listUsers route:", error);
		// Handle error
		}
	}
	

	async loginUser(req, res) {
		try {
		const isLoggedIn = await myuser.findUser({ login: req.body.usrLogin, password: req.body.usrPassword });
		if (isLoggedIn) {
			this.showMemberArea(req, res, isLoggedIn);
			req.session.user = isLoggedIn;
			res.writeHead(301, { Location: '/' });
			res.end();
		} else {
			this.showLogin(req, res);
		}
		} catch (error) {
		console.error("Error occurred in loginUser route:", error);
		// Handle error
		}
	}
	

	async logoffUser(req, res) {
		try {
			console.log('Logging out');
			req.session.user = null;
			this.showLogin(req, res);
			
		} catch (error) {
		console.error("Error occurred in logoffUser route:", error);
		// Handle error
		}
	}

	registerUser(req, res) {
		const userInfo = {};
		const userFields = {
		'firstname': 'name',
		'lastname': 'name',
		'email': 'email',
		'login': 'username',
		'password': 'password'
		};
	
		for (const field in userFields) {
		const fieldType = userFields[field];
		const fieldValue = req.body[field] || '';
		switch (fieldType) {
			case 'name':
			case 'password':
			case 'string':
			userInfo[field] = fieldValue;
			break;
			case 'number':
			const isValidNumber = form_validation.isNumber(fieldValue);
			isValidNumber ? userInfo[field] = fieldValue : userInfo[field] = '';
			break;
			case 'username':
			const isValidUsername = form_validation.isUsername(fieldValue);
			isValidUsername ? userInfo[field] = fieldValue : userInfo[field] = '';
			break;
			case 'email':
			const isValidEmail = form_validation.isEmail(fieldValue);
			isValidEmail ? userInfo[field] = fieldValue : userInfo[field] = '';
			break;
		}
		}
	
		userInfo['confirm'] = form_validation.getRandomString();
	
		if (userInfo['email'] && userInfo['login'] && userInfo['firstname'] && userInfo['lastname'] && userInfo['password'].length > 5) {
		console.log('Adding user');
		myuser.addUser({
			login: userInfo['login'],
			email: userInfo['email'],
			firstname: userInfo['firstname'],
			lastname: userInfo['lastname'],
			password: userInfo['password']
		}, () => {
			this.showRegisterSuccess(req, res, req.body);
			console.log('Success in adding user');
		}, () => {
			this.showForm(req, res, req.body);
		});
		} else {
		console.log('Failed validation');
		}
	}
	
	/** function registerForm 
	 * this function shows a form to register a new user
	 */
	async registerForm(req, res) {
		try {

			const userInfo = {};
			this.showForm(req, res, userInfo);

		} catch (error) {
		console.error("Error occurred in registerForm route:", error);
		// Handle error
		}
	}

	/** function settheme
	 * this function changes the current theme - obviously this is open for demo purposes
	 */
	setTheme(req, res) {
		if (template.activeThemes.hasOwnProperty(req.params.theme)) {
		template.setTheme(req.params.theme);
		}
		this.index(req, res);
	}
  
    // Static method to serve static files
    static styles(req, res) {
        const extensions = {
            'txt': 'text/plain',
            'swf': 'application/x-shockwave-flash',
            'jpg': 'image/jpeg',
            'gif': 'image/gif',
            'png': 'image/png',
            'jpeg': 'image/jpeg',
            'css': 'text/css',
            'js': 'text/javascript'
        };

        let myTheme;
        if (template.activeThemes.hasOwnProperty(req.params.theme)) {
            myTheme = req.params.theme;
        } else {
            res.end('<h1>File not available</h1>Something went wrong');
            return;
        }

        const filename = req.params.file;
        const fileExtension = filename.split('.').pop();
        const mimeType = extensions[fileExtension];

        if (mimeType) {
            fs.readFile(`styles/${myTheme}/${filename}`, "binary", function(err, file) {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/html" });
                    res.end(`<h1>File not available</h1>Something went wrong<br>\nTried to get : styles/${myTheme}/${filename}`);
                    return;
                }
                res.writeHead(200, { "Content-Type": mimeType });
                res.end(file, "binary");
            });
        }
    }


  

}

module.exports = { Routes };
