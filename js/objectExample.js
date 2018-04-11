var testObj = {
    "name": "User",
    "age": 25,
    getInfo() {
        console.log(this.name + " " + this.age);
    }
}

testObj.getInfo();

for (var prop in testObj) {
    delete(testObj[prop]);
}

console.log(testObj);