import ROUTER from 'router'
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        this.user = user
    },
    register(username, password) {
        this.registeredUser.push({
        username : username,
        password : password
        })
        ROUTER.push("/Login");
    },
    login(username, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].username === username && this.registeredUser[i].password === password) {
                this.setUser(username)
                ROUTER.push('/Dashboard')
                return this.registeredUser[i]

            }
        }
        return null
    },
    logout() {
        this.user = null
        ROUTER.push('/Login')
    },
    update() {
        // this.user = null
        ROUTER.push('/Update')
    },
    save() {
        // this.user = null
        ROUTER.push('/PersonalInfo')
    }
}