const allUsers = [
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"]
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"]
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"]
    }
];
const getUsersWithFriend = (users, friendName) => {
    const filteredArray = [];
    users.filter((element, index, array) => {
    let v = element.friends.includes(friendName);
        if ( v === true) {
            filteredArray.push(array[index]);
        }
   });
   return filteredArray;
};
console.log(getUsersWithFriend(allUsers, "Briana Decker")); 