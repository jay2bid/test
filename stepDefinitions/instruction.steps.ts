import { setDefaultTimeout, BeforeAll, Given } from '@cucumber/cucumber';

BeforeAll(function () {
  setDefaultTimeout(60000);
});

Given("the instruction's source amount is {int} in minor units", async function (amountInMinorUnits: number) {
  this.PayoutRequestBuilder.withInstructionSourceAmount(amountInMinorUnits);
});

Given("the instruction's destination currency code is {string}", async function (currencyCode: string) {
  this.PayoutRequestBuilder.withInstructionDestinationCurrency(currencyCode);
});

Given("the instruction's destination amount is {int} in minor units", async function (amountInMinorUnits: number) {
  this.PayoutRequestBuilder.withInstructionDestinationAmount(amountInMinorUnits);
});

Given("the instruction's source id is present", async function () {
  if (this.CurrencyAccountId == null) {
    throw new Error('Source id is not present since Currency Account Id is missing.');
  }
  this.PayoutRequestBuilder.withInstructionSourceId(this.CurrencyAccountId);
});

Given("the instruction's source id is {string}", async function (currencyAccount: string) {
  this.PayoutRequestBuilder.withInstructionSourceId(currencyAccount);
});
