import { setDefaultTimeout, BeforeAll, Given } from '@cucumber/cucumber';

BeforeAll(function () {
  setDefaultTimeout(60000);
});

Given("the sender's company name is {string}", function (companyName: string) {
  if (companyName === 'set') {
    this.SenderBuilder.withSenderCompanyName(this.faker.company.companyName());
  } else if (companyName === 'empty') {
    this.SenderBuilder.withSenderCompanyName('');
  } else {
    this.SenderBuilder.withSenderCompanyName(companyName);
  }
});

Given("the sender's address line one is {string}", function (addressLineOne: string) {
  if (addressLineOne === 'set') {
    this.SenderAddressBuilder.withAddressLine1(this.faker.address.streetAddress());
  } else if (addressLineOne === 'empty') {
    this.SenderAddressBuilder.withAddressLine1('');
  } else {
    this.SenderAddressBuilder.withAddressLine1(addressLineOne);
  }
  
});

Given("the sender's address line two is {string}", function (addressLineTwo: string) {
  if (addressLineTwo === 'set') {
    this.SenderAddressBuilder.withAddressLine2(this.faker.address.secondaryAddress());
  } else if (addressLineTwo === 'empty') {
    this.SenderAddressBuilder.withAddressLine2('');
  } else {
    this.SenderAddressBuilder.withAddressLine2(addressLineTwo);
  }
});

Given("the sender's address city is in {string}", function (city: string) {
  if (city === 'set') {
    this.SenderAddressBuilder.withCity(this.faker.address.city());
  } else if (city === 'empty') {
    this.SenderAddressBuilder.withCity('');
  } else {
    this.SenderAddressBuilder.withCity(city);
  }
});

Given("the sender's address postal code is in {string}", function (postalCode: string) {
  if (postalCode === 'set') {
    this.SenderAddressBuilder.withZip(this.faker.address.zipCode());
  } else if (postalCode === 'empty') {
    this.SenderAddressBuilder.withZip('');
  } else {
    this.SenderAddressBuilder.withZip(postalCode);
  }
});

Given("the sender's address state is in {string}", function (state: string) {
  if (state === 'set') {
    this.SenderAddressBuilder.withState(this.faker.address.state());
  } else if (state === 'empty') {
    this.SenderAddressBuilder.withState('');
  } else {
    this.SenderAddressBuilder.withState(state);
  }
});

Given("the sender's company is cko-sas", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout SAS');
  this.SenderAddressBuilder.withAddressLine1('52 Boulevard de Sebastopol')
    .withCity('Paris')
    .withZip('75003')
    .withCountry('FR');
});

Given("the sender's company is cko-ltd-hkg", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout Limited');
  this.SenderAddressBuilder.withAddressLine1('Room 1901, 19F, Lee Garden One')
    .withAddressLine2('33 Hysan Avenue, Causeway Bay')
    .withCity('Hong Kong')
    .withCountry('HK');
});

Given("the sender's company is cko-llc-usa", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout LLC');
  this.SenderAddressBuilder.withAddressLine1('Corporation Service Company, 2711 Centerville Road')
    .withAddressLine2('Suite 400')
    .withCity('New Castle County')
    .withState('Delaware')
    .withCountry('US');
});

Given("the sender's company is cko-ltd-uk", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout Ltd');
  this.SenderAddressBuilder.withAddressLine1('54 Portland Place')
    .withCity('London')
    .withZip('W1B1DY')
    .withCountry('GB');
});

Given("the sender's company is cko-apac-ltd", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout APAC Ptd.Ltd');
  this.SenderAddressBuilder.withAddressLine1('Collins Square, Tower Five, Level 22')
    .withAddressLine2('#08-16, Peninsula Plaza')
    .withCity('Singapore')
    .withZip('179098')
    .withCountry('SG');
});

Given("the sender's company is cko-ltd-aus", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout.com Australia Pty Ltd');
  this.SenderAddressBuilder.withAddressLine1('111 North Bridge Road')
    .withAddressLine2('727 Collins Street')
    .withCity('Docklands')
    .withState('Victoria')
    .withZip('3008')
    .withCountry('AU');
});

Given("the sender's company is cko-llc-uae", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout MENA FZ-LLC');
  this.SenderAddressBuilder.withAddressLine1('Office No: 1404-1405')
    .withAddressLine2('Floor 14, Shatha Tower')
    .withCity('Dubai')
    .withCountry('AE');
});

Given("the sender's company is cko-ksa-sau", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout KSA for Communication and Information Technology Co.');
  this.SenderAddressBuilder.withAddressLine1('AstroLabs, Al Imam Malik Rd')
    .withAddressLine2('3141 Aas Ibin')
    .withCity('Riyadh')
    .withCountry('SA');
});

Given("the sender's company is cko-ltd-nz", function () {
  this.SenderBuilder.withSenderCompanyName('Checkout Limited (NZ)');
  this.SenderAddressBuilder.withAddressLine1('Level 18, 188 Quay Street')
    .withAddressLine2('PWC Tower')
    .withCity('Auckland')
    .withZip('1010')
    .withCountry('NZ');
});