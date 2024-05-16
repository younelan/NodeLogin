import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/community', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
    login: { type: String, required: true },
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    confirm: { type: String, required: true },
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

class MongoUser {
    async addUser(userInfo, successCallback, failureCallback) {
        try {
            const newUser = new User(userInfo);
            await newUser.save();
            console.log('User added successfully');
            if (successCallback) successCallback();
            return true;
        } catch (error) {
            console.error('Error adding user:', error);
            if (failureCallback) failureCallback();
            return false;
        }
    }

    async findUser(query) {
        try {
			//console.log("hello from findUser")
            const user = await User.findOne(query);
			// console.log(user)
			// console.log("found the user")
            return user;
        } catch (error) {
            console.error('Error finding user:', error);
            return null;
        }
    }

    async loginUser(credentials) {
        try {
            const user = await this.findUser(credentials);
            return user;
        } catch (error) {
            console.error('Error logging in:', error);
            return null;
        }
    }

    async listUsers() {
        try {
            const users = await User.find({});
            return users;
        } catch (error) {
            console.error('Error listing users:', error);
            return [];
        }
    }
	/* old 
    async findUser(criteria) {
        try {
            const users = await db.users.find(criteria);
            return users || null;
        } catch (error) {
            console.error('Error finding user:', error);
            return null;
        }
    }

    async listUsers() {
        try {
            const users = await db.users.find({});
            let content = '';
            users.forEach(user => {
                content += `<li>${user.firstname} ${user.lastname}</li>\n`;
            });
            return content;
        } catch (error) {
            console.error('Error fetching users:', error);
            return null;
        }
    }

    async addUser(user) {
        try {
            const isSaved = await db.users.save(user);
            return isSaved;
        } catch (error) {
            console.error('Error saving user:', error);
            return false;
        }
    }
}



	*/
}

export default MongoUser;
export { MongoUser, User };

// const myuser = new MongoUser();

// export default myuser