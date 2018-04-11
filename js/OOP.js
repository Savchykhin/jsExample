function createUser(name) {
    this.getName = function() {
        console.log("Hello " + name);
    }
    this.age = 34
}

var user1 = new createUser("Ray");
user1.getName();

var user2 = new createUser("Simon");
console.log(user2.age);
user2.getName();