import { setDefaultTimeout, BeforeAll, Then, DataTable } from '@cucumber/cucumber';
import { expect } from 'chai';
import { checkErrorCodes } from '../src/helpers/checkErrorCodes';

BeforeAll(function () {
  setDefaultTimeout(60000);
});

Then('the error codes contain {string}', function (expectedErrorCode: string) {
  const errorCode = this.HttpResponse.body.error_codes.filter((x: string) => x === expectedErrorCode)[0];

  expect(
    errorCode,
    `errorCode is undefined. Could not find error code "${expectedErrorCode}" in the response body ${JSON.stringify(
      this.HttpResponse.body,
    )}`,
  ).to.not.be.undefined;

  expect(
    errorCode,
    `errorCode is null. Could not find error code "${expectedErrorCode}" in the response body ${JSON.stringify(
      this.HttpResponse.body,
    )}`,
  ).to.not.be.null;

  expect(errorCode, `Expecting "${expectedErrorCode}" but was "${errorCode}"`).to.be.eq(expectedErrorCode);
});

Then('the error codes contain', function (expectedErrorCodes: DataTable) {
  const errorCodes = expectedErrorCodes.raw().map((e) => e[0]);
  checkErrorCodes(this.HttpResponse.body.error_codes, errorCodes);
});

Then('the error codes contains exactly {string}', function (expectedErrorCodes: string) {
  let listOfExpectedErrorCodes: string[] = [];
  if (expectedErrorCodes != '') {
    listOfExpectedErrorCodes = expectedErrorCodes.split(',');
  }
  checkErrorCodes(this.HttpResponse.body.error_codes, listOfExpectedErrorCodes);
});

Then('the number of error codes is {int}', function (expectedNumberOfErrorCodes: number) {
  const numberOfErrorCodes =
    this.HttpResponse.body.error_codes === undefined ? 0 : this.HttpResponse.body.error_codes.length;
  expect(
    numberOfErrorCodes,
    `Expecting "${expectedNumberOfErrorCodes}" but was "${numberOfErrorCodes}". The list of error codes "${this.HttpResponse.body.error_codes}"`,
  ).to.be.eq(expectedNumberOfErrorCodes);
});
