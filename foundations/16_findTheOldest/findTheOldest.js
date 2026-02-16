const findTheOldest = function(arr) {
    function age(person) {
        if (!person.yearOfDeath) return (new Date().getFullYear()) - person.yearOfBirth;
        return person.yearOfDeath - person.yearOfBirth;
    }
    return arr.sort((person1, person2) => age(person2) - age(person1)).at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
