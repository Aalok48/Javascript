// two type of datatypes in js one is primitive and other is objects

const student = {
    fullName : 'Alok karn',
    age : 24,
    isPass : false,
    grade : 'dherai kamm'
}
student.age = 22
console.log(student.age)
console.log(student.grade)
console.log(student['grade'])

// const cannot be changed but the value of const in key-value pair can be changed 