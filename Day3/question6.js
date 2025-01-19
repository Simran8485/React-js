function createUserProfile(username, age = 25, country = 'Unknown') {
    return { username, age, country };
}

console.log(createUserProfile('JohnDoe')); 


console.log(createUserProfile('JaneDoe', 30, 'USA')); 

