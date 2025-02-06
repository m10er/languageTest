export class KontaktBody {

    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    streetNumber:string;
    zipCodeCity:string;
    yourMessage:string;

    constructor(firstName:string, lastName:string, email:string, phone:string, streetNumber:string, 
        zipCodeCity:string, yourMessage:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.streetNumber = streetNumber;
        this.zipCodeCity = zipCodeCity;
        this.yourMessage = yourMessage;
    
        }

}



