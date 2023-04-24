import { setDefaultTimeout, BeforeAll, Given } from '@cucumber/cucumber';
import { AddressBuilder } from '../src/builders/payoutsApi/addressBuilder';

BeforeAll(function () {
  setDefaultTimeout(60000);
});

Given("the recipient's company name is {string}", function (companyName: string) {
  if (companyName === 'set') {
    const name = this.faker.company.companyName();
    this.RecipientBuilder.withRecipientAccountCompanyName(name);
  } else if (companyName === 'empty') {
    this.RecipientBuilder.withRecipientAccountCompanyName('');
  } else {
    this.RecipientBuilder.withRecipientAccountCompanyName(companyName);
  }
});

Given("the recipient's account holder type is {string}", function (accountHolderType: string) {
  if (accountHolderType === 'empty') {
    this.RecipientBuilder.withRecipientAccountHolderType('');
  } else {
    this.RecipientBuilder.withRecipientAccountHolderType(accountHolderType);
  }
});

Given("the recipient's reference is {string}", function (reference: string) {
  this.RecipientBuilder.withRecipientReference(reference);
});

Given("the recipient's billing descriptor is {string}", function (billingDescriptor: string) {
  if (billingDescriptor === 'empty') {
    this.RecipientBuilder.withRecipientBillingDescriptor('');
  }
  else {
    this.RecipientBuilder.withRecipientBillingDescriptor(billingDescriptor);
  }
});

Given("the recipient's billing address line one is {string}", function (addressLineOne: string) {
  if (addressLineOne === 'set') {
    this.RecipientAddressBuilder.withAddressLine1(this.faker.address.streetAddress());
  } else if (addressLineOne === 'empty') {
    this.RecipientAddressBuilder.withAddressLine1('');
  } else {
    this.RecipientAddressBuilder.withAddressLine1(addressLineOne);
  }
});

Given("the recipient's billing address line two is {string}", function (addressLineTwo: string) {
  if (addressLineTwo === 'set') {
    this.RecipientAddressBuilder.withAddressLine2(this.faker.address.secondaryAddress());
  } else if (addressLineTwo === 'empty') {
    this.RecipientAddressBuilder.withAddressLine2('');
  } else {
    this.RecipientAddressBuilder.withAddressLine2(addressLineTwo);
  }
});

Given("the recipient's billing address city is {string}", function (city: string) {
  if (city === 'set') {
    this.RecipientAddressBuilder.withCity(this.faker.address.city());
  } else if (city === 'empty') {
    this.RecipientAddressBuilder.withCity('');
  } else {
    this.RecipientAddressBuilder.withCity(city);
  }
});

Given("the recipient's billing address state is {string}", function (state: string) {
  if (state === 'set') {
    this.RecipientAddressBuilder.withState(this.faker.address.state());
  } else if (state === 'empty') {
    this.RecipientAddressBuilder.withState('');
  } else {
    this.RecipientAddressBuilder.withState(state);
  }
});

Given("the recipient's billing address zip is {string}", function (zip: string) {
  if (zip === 'set') {
    this.RecipientAddressBuilder.withZip(this.faker.address.zipCode());
  } else if (zip === 'empty') {
    this.RecipientAddressBuilder.withZip('');
  } else {
    this.RecipientAddressBuilder.withZip(zip);
  }
});

Given("the recipient's billing address is in {string}", function (countryCode: string) {
  if (countryCode === 'empty') {
    this.RecipientAddressBuilder.withCountry('');
  }
  else {
    this.RecipientAddressBuilder.withCountry(countryCode);
  }
});

Given("the recipient's random billing address is in {string}", function (countryCode: string) {
  this.RecipientAddressBuilder = new AddressBuilder(countryCode);
});