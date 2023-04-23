function greeting(){
    let username = 'Oscar';

    function displayUser(){
        return 'hello ${username}' ;
    }
    return displayUser;

}

const g = greeting();
console.log(g);
console.log(g());