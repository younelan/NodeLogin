class MongoUser {
    constructor() {}

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

const myuser = new MongoUser();

export default myuser