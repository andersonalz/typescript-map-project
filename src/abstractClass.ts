import { location } from "./common/interfaces/location.interface";


export abstract class Base {
    abstract location: location

    getLocation(): location {
        return this.location
    }
}