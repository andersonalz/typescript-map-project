import { Base } from "./abstractClass";
import { location } from "./common/interfaces/location.interface";
import { faker } from '@faker-js/faker'

export class Company extends Base{
    public name: string;
    public email: string;
    public location: location;

    constructor(){
        super()
        this.name= faker.person.fullName()
        this.email= faker.internet.email()
        this.location= {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }

    }
}

console.log(new Company().getLocation())