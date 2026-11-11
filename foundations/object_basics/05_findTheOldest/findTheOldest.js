const findTheOldest = function (people) {
  const getAge = function (person) {
    const end = person.yearOfDeath ?? new Date().getFullYear();
    return end - person.yearOfBirth;
  };

  let oldest = people[0];
  for (let i = 1; i < people.length; i++) {
    if (getAge(people[i]) > getAge(oldest)) {
      oldest = people[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
