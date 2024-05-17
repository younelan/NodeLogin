import fs  from 'fs';
import path from 'path';
import { MongoUser } from './user.js';
const myuser = new MongoUser();

import templateHelper from "./template_helper.js";
import FormHelper from "./form_helper.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const siteConfigPath = path.join(__dirname, 'config', 'siteConfig.json');
const siteConfigRaw = fs.readFileSync(siteConfigPath);
const SiteConfig = JSON.parse(siteConfigRaw);

//const { UserManager } = require("./userManager");

class Routes {
	constructor() {
		//this.userManager = new UserManager(); // Initialize UserManager instance
		//this.userManager = new MongoDB
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
			themepath: '/themes/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};

		const view = templateHelper.render('themes/' + templateHelper.currentTheme + '/index.tpl', myvars);
		res.end(view);
		} catch (error) {
			console.error("Error occurred in showLogin route:", error);
			// Handle error
		}
	}

	async showForm(req, res,body) {
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
			themepath: '/themes/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};
	
		const view = templateHelper.render('themes/' + templateHelper.currentTheme + '/index.tpl', myvars);
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
			themepath: '/themes/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};

		const view = templateHelper.render('themes/' + templateHelper.currentTheme + '/index.tpl', myvars);
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
			content: templateHelper.render('views/registersuccess.html', userInfo),
			sidebar1_title: '',
			sidebar2_title: '',
			sidebar2: (function () {
			let sidebar2 = '';
			for (const currentTheme in templateHelper.activeThemes) {
				sidebar2 = sidebar2 + "<a href=/settheme/" + currentTheme + '>' + templateHelper.activeThemes[currentTheme] + '</a><br>';
			}
			return sidebar2;
			})(),
			themepath: '/themes/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};
	
		const view = templateHelper.render('themes/' + templateHelper.currentTheme + '/index.tpl', myvars);
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
			content: templateHelper.render('views/memberpage.html', params),
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
			themepath: '/themes/' + templateHelper.currentTheme,
			site_name: SiteConfig.site_name,
			site_motto: SiteConfig.site_motto,
		};
	
		const view = templateHelper.render('themes/' + templateHelper.currentTheme + '/index.tpl', myvars);
		res.end(view);
		} catch (error) {
		console.error("Error occurred in showPage route:", error);
		// Handle error
		}
	}
	

	async listUsers(req, res) {
		try {
			content="";
			const users = await myuser.listUsers();
			users.forEach(user => {
					content += `<li>${user.firstname} ${user.lastname}</li>\n`;
			});

			this.showPage(req, res, { content });
		} catch (error) {
			console.error("Error occurred in listUsers route:", error);
			// Handle error
		}
	}
	

// loginUser method
async loginUser(req, res) {
    console.log("Hello from login");
    const { usrLogin, usrPassword } = req.body;

    // Check if usrLogin is an email or username
    if (FormHelper.isEmail(usrLogin) || FormHelper.isUsername(usrLogin)) {
        try {
            // Proceed with login logic
            const isLoggedIn = await myuser.findUser({ login: usrLogin, password: usrPassword });

            if (isLoggedIn) {
                // Set session user and redirect to home page
                req.session.user = isLoggedIn;
                res.redirect('/');
            } else {
                // User not found, show login page
                this.showLogin(req, res);
            }
        } catch (error) {
            console.error("Error occurred during login:", error);
            res.status(500).send("Internal Server Error");
        }
    } else {
        // Invalid usrLogin format, show login page
        this.showLogin(req, res);
    }
};


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


	async registerUser(req, res) {
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
			console.log(field + " " + fieldType + " " + fieldValue)
			switch (fieldType) {
				case 'name':
				case 'password':
				case 'string':
					userInfo[field] = fieldValue;
					break;
				case 'number':
					const isValidNumber = FormHelper.isNumber(fieldValue);
					if (isValidNumber) {
						userInfo[field] = fieldValue;
					}
					break;
				case 'username':
					const isValidUsername = FormHelper.isUsername(fieldValue);
					if (isValidUsername) {
						userInfo[field] = fieldValue;
					}
					break;
				case 'email':
					const isValidEmail = FormHelper.isEmail(fieldValue);
					if (isValidEmail) {
						userInfo[field] = fieldValue;
					}
					break;
			}
		}
	
		const confirmationCode = FormHelper.getRandomString();
		userInfo['confirm'] = confirmationCode;
	
		if (userInfo['email'] && userInfo['login'] && userInfo['firstname'] && userInfo['lastname'] && userInfo['password'].length > 5) {
			console.log("adding user");
			myuser.addUser({ login: userInfo['login'], email: userInfo['email'], firstname: userInfo['firstname'], lastname: userInfo['lastname'], password: userInfo['password'] , confirm: userInfo['confirm']},
				() => {
					this.showRegisterSuccess(req, res, req.body);
					console.log("success in add");
				},
				() => {
					this.showForm(req, res, req.body);
				}
			);
		} else {
			console.log("Failed validation");
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
		if (templateHelper.activeThemes.hasOwnProperty(req.params.theme)) {
		templateHelper.setTheme(req.params.theme);
		}
		this.index(req, res);
	}
  
    // Static method to serve static files
    async themes(req, res) {
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
        if (templateHelper.activeThemes.hasOwnProperty(req.params.theme)) {
            myTheme = req.params.theme;
        } else {
            res.end('<h1>File not available</h1>Something went wrong');
            return;
        }

        const filename = req.params.file;
        const fileExtension = filename.split('.').pop();
		console.log(fileExtension) + " " + filename + "\n"
        const mimeType = extensions[fileExtension];

        if (mimeType) {
            fs.readFile(`themes/${myTheme}/${filename}`, "binary", function(err, file) {
                if (err) {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(`<h1>File not available</h1>Something went wrong<br>\nTried to get : themes/${myTheme}/${filename}`);
                    return;
                }
                res.writeHead(200, { "Content-Type": mimeType });
                res.end(file, "binary");
            });
        }
    }


  

}

export default Routes