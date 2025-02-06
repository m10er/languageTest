import { faker } from "@faker-js/faker";

class Env {

   firstName: string;
   lastName: string;
   email: string;
   message:string;
   phoneNumber: string;
   adress:string;
   zipcode:string;
    

constructor(){

    this.email = faker.internet.email();
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.message = faker.lorem.sentence();
    this.phoneNumber = faker.phone.number();
    this.adress = faker.location.streetAddress();
    this.zipcode = faker.location.zipCode();
}


}

export default new Env();

