const user = {
    userName: "ali",
    number: 3030030,
    welcome: () => {
        console.log(`hello ${this.userName} welcome`)
        console.log(this)
    }
}

user.welcome()