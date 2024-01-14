class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("This is the data of any website");
        console.log(this.name);
        }
}
class admin extends User{
    constructor(name,email){
        super();
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("This is the edit data of any website");
        console.log(this.name);
    }
    
}
const user1 = new User("Durgesh","durgeshtiwari362592@gamil.com");
const user2 = new admin("Shubham","shubhamtiwari362592@gamil.com");
user2.viewData();