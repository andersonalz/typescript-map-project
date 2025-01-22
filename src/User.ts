import { faker } from '@faker-js/faker';
import { location } from './common/interfaces/location.interface'

export class User {
    public name: string;
    public email: string;
    public location: location;

    constructor() {
        this.name = faker.person.fullName()
        this.email = faker.internet.email()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        }
    }
}