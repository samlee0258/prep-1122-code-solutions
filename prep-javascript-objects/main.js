var person = {
  firstName: 'Samuel',
  lastName: 'Lee',
  hobby: 'gaming'
};
console.log(person);

var fullName = 'Samuel ' + 'Lee';
console.log('The person\'s name is:', fullName);

person.job = 'Student';
console.log('The person\'s current job is:', person.job);

person.previousJob = 'Server';
console.log('The person\'s previous job was:', person.previousJob);

console.log('The complete person\'s object:', person);
