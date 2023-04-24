import { Address } from '../../common/models';
import { getFakeJsLocale } from '../../helpers/fakerLocalesMap';

/* eslint-disable */
const faker = require('faker');

export class AddressBuilder {
  private readonly address: Address;

  constructor(countryCode?: string) {
    if (countryCode) {
      faker.setLocale(getFakeJsLocale(countryCode));
      this.address = {
        addressLine1: faker.address.streetAddress(),
        addressLine2: faker.address.secondaryAddress(),
        city: faker.address.city(),
        zip: faker.address.zipCode(),
        state: faker.address.state(),
        country: countryCode,
      };
    } else {
      this.address = {
      };
    }
  }

  static new(): AddressBuilder {
    return new AddressBuilder();
  }

  withAddressLine1(addressLine1: string) : AddressBuilder {
    this.address.addressLine1 = addressLine1;
    return this;
  }

  withAddressLine2(addressLine2: string) : AddressBuilder{
    this.address.addressLine2 = addressLine2;
    return this;
  }

  withCity(city: string): AddressBuilder {
    this.address.city = city;
    return this;
  }

  withZip(zip: string): AddressBuilder {
    this.address.zip = zip;
    return this;
  }

  withState(state: string) : AddressBuilder{
    this.address.state = state;
    return this;
  }

  withCountry(country: string) : AddressBuilder{
    this.address.country = country;
    return this;
  }

  build(): Address {
    return this.address;
  }
}
