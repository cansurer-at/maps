import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";


//using implements mean that helping to find the error with more details
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name : ${this.name}`;
  }
}
