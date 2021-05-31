// 1. Create a class called "Component". The constructor for Component should take in one parameter "name". There should be one method called "render" that prints `<p>Component _name_  rendering` where `_name_`  is the provided name.

class Component {
    constructor(name) {
        this.name = name;
    }
    render() {
        console.log(`<p>Component ${this.name} rendering`);
    }
}

const testComponent = new Component("test");
testComponent.render(); // <p>Component test rendering


// 2. Create a child class called UserCard that extends Component. The UserCard should take in only one constructor parameter called "user". Expect the user to be an object with "name", "imageUrl" and "email" properties. The UserCard should override the original "render" method. 

class UserCard extends Component {
    constructor(user) {
        super();
        this.name = user;
        this.imageUrl = user + ".jpg";
        this.email = user.toLowerCase() + "@usercardemail.com";
        
    }

    render() {
        console.log (`<div class="card card-user">
        <img class="card-img-top" src="${this.imageUrl}" alt>
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">To contact, please send a message to</p>
            <a
                href="mailto:${this.email}"
                class="btn btn-primary"
            >
            ${this.email}
            </a>
        </div>
    </div> `);

    }
}
const userCard1 = new UserCard("Fay_66427");
console.log(userCard1);
//prints
// UserCard {
//     name: 'Fay_66427',
//     imageUrl: 'Fay_66427.jpg',
//     email: 'fay_66427@usercardemail.com'
//   }
userCard1.render();
//prints:
/* <div class="card card-user">
        <img class="card-img-top" src="Fay_66427.jpg" alt>
        <div class="card-body">
            <h5 class="card-title">Fay_66427</h5>
            <p class="card-text">To contact, please send a message to</p>
            <a
                href="mailto:fay_66427@usercardemail.com"
                class="btn btn-primary"
            >
            fay_66427@usercardemail.com
            </a>
        </div>
    </div>  */




// 3. Create an array of at least 5 user objects.

const usersObjectsArray = [
    { name: "Lavina_Collier_42520", 
      imageUrl: "http://placeimg.com/640/480/nightlife",  
      email: "lavina_collier_42520@example.com"},
    { name: "Salvador_Hand_39135", 
      imageUrl: "http://placeimg.com/640/480/abstract", 
      email: "salvador_hand_39135@example.com"},
    { name: "Claude_Marks_32336", 
      imageUrl: "http://placeimg.com/640/480/cats", 
      email: "claude_marks_32336@example.com"},
    { name: "Horace_Schultz_94105", 
      imageUrl: "http://placeimg.com/640/480/nature", 
      email: "horace_schultz_94105@example.com"},
    { name: "Barton_Macejkovic_48410", 
      imageUrl: "http://placeimg.com/640/480/people", 
      email: "barton_macejkovic_48410@example.com"},
]
console.log(usersObjectsArray);

// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.


const cardUsers = usersObjectsArray.map(x =>  new UserCard(x.name));
console.log(cardUsers);

console.log("-------")
// 5. Using .forEach(), call the render method of your instances.

cardUsers.forEach(function(cardUsers) { cardUsers.render()});

console.log("-------")

// 6. Print the type of the UserCard class.

console.log(typeof UserCard); // function


// 7. Print the type of a UserCard instance.

console.log(cardUsers[0] instanceof UserCard); //true each instance inside the array of instances cardUsers is confirmed as instance of UserCard with instanceof.., then I run typeof
console.log(typeof cardUsers[0]); // object

console.log(userCard1 instanceof UserCard); // true this is another instance of UserCard
console.log(typeof userCard1); // object

