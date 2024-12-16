class Person {
   name = "";
   email = "";
   age = 0;
   resume = "";
   id = 0;
   static total = 0;

   constructor(name, email, age, resume) {
      this.name = name;
      this.email = email
      this.age = age;
      this.resume = resume;
      Person.total++;
      this.id = Person.total;
   }//constructor

   printInfo(div) {
      div.insertAdjacentHTML("beforeend", `
        <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${this.id}- ${this.email}</div>
        <div class="card-body" id="cardBody_${this.id}">
          <h5 class="card-title">${this.name} - ${this.age}</h5>
          <p class="card-text">${this.resume}</p>
        </div>
        `)
   }//printInfo

   //Reglas de negocio, para establecer correo electronico
   setEmail(email){
      const regex= new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
      this.email= (regex.test(email))?email:"sincorreo@dominio.com"
   }//setEmail

   static printTotal(div) {
      div.insertAdjacentHTML("afterbegin", `
        <div class="alert alert-primary" role="alert">
       </strong> Personas en total:<strong> ${Person.total} </strong>
      </div>

        `)
   }//printTotal

}//clase Person


//Herencia
class Employee extends Person {
   dapartment = "";
   salary = "";

   constructor(name, email, age, resume, dapartment, salary) {
      super(name, email, age, resume);
      this.dapartment = dapartment;
      this.salary = salary;
   }//constructor}

   //Overrides
   printInfo(div) {
      super.printInfo(div);
      let cardBody = document.getElementById(`cardBody_${this.id}`);
      cardBody.insertAdjacentHTML("beforeend", `
      <p class="card-text">${this.dapartment}</p>
      <p class="card-text text-end">$ ${this.salary} MXN</p>
      `)
   }
}// class Employee


const divData = document.getElementById("divData")

const employees = [
   new Employee("wendy", "wheen@gmail.com", 20, "java fullStack", "Software development", 850.50),
   new Employee("isaac", "isaac@gmail.com", 22, "java fullStack", "Software development", 950.50),
   new Employee("carmen", "carmen@gmail.com", 25, "java fullStack", "Software development", 950.50)
];


employees[2].setEmail("carmen12@gmail.com");

employees.forEach((e) => e.printInfo(divData))

Person.printTotal(divData)

// const wendy = new Employee("wendy", "wheen@gmail.com", 20, "java fullStack", "Software development", 850.50);
// const isaac = new Person("isaac", "isaac@gmail.com", 28, "java fullStack");
// const carmen = new Person("carmen", "carmen@gmail.com", 28, "java fullStack");

// wendy.printInfo(divData);
// isaac.printInfo(divData);
// carmen.printInfo(divData);
// Person.printTotal(divData)

// console.log(wendy);








// wendy.name="Wendy";
// wendy.email="wheen@gmail.com";
// wendy.age=20;
// wendy.resume="fullStackk";


// const person = {
//     "name": "smith",
//     "email": "smith@gmail.com",
//      printInfo: function() {
//         console.log(`Nombre: ${this.name}, correo electronico ${this.email}.`);
//     },
//     printInfo2: (t) => {
//         console.log(`Nombre: ${t.name}, correo electronico ${t.email}.`);
//     }
// }; //printInfo

// person.printInfo();
// person.printInfo2(person);


// const person2 = {
//     "name": "erick",
//     "email": "erick@gmail.com",
//      printInfo: function() {
//         console.log(`Nombre: ${this.name}, correo electronico ${this.email}.`);
//     },
//     printInfo2: (t) => {
//         console.log(`Nombre: ${t.name}, correo electronico ${t.email}.`);
//     }
// }; //printInfo

// person2.printInfo();

