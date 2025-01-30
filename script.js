//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get modifiedName() {
		return "Person name is - "+this.name;
	}
	set modifiedAge(age){
		this.age=age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(this.name+"is studying");
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(this.name+"is teaching")
	}
}
const person=new Person("john",25);
console.log(person);
console.log(person.modifiedName);
Person.modifiedAge=32;
console.log(Person.age);
const student=new Student("Alice",22);
student.study();
const teacher=new Teacher("Bob",40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
