const findTheOldest = function(array) {
    return array.reduce((oldest, currestPerson)=>{
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(currestPerson.yearOfBirth, currestPerson.yearOfDeath)
        return oldestAge > currentAge ? oldest : currestPerson;
    })
};

const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear()
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
