const findTheOldest = function(people) {
    let oldestPerson = people[0];
    let currentPerson;
    for(let i=0; i<people.length; i++){
        currentPerson=people[i];
        if(!("yearOfDeath" in currentPerson)){
            let currentDate = new Date();
            currentPerson.age =  currentDate.getFullYear() - currentPerson.yearOfBirth;
        }
        else{
            currentPerson.age = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }
        if(currentPerson.age > oldestPerson.age){
            oldestPerson = currentPerson;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
