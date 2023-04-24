import { When, setDefaultTimeout, BeforeAll, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { GatekeepeerClient } from '../src/clients/gatekeeper';

const gatekeeperClient = new GatekeepeerClient();

BeforeAll(async function () {
  setDefaultTimeout(60000);
  await gatekeeperClient.init();
});

When('a crypto payout request is initiated', async function () {
  const payout = this.PayoutRequestBuilder.build(
    this.RecipientBuilder,
    this.RecipientAddressBuilder,
    this.SenderAddressBuilder,
    this.SenderBuilder,
  );
  this.HttpResponse = await gatekeeperClient.createPayment(payout);
});;

When('a payout request is sent without a recipient', async function () {
  const payout = this.PayoutRequestBuilder.build(
    void 0,
    this.RecipientAddressBuilder,
    this.SenderAddressBuilder,
    this.SenderBuilder,
  );
  this.HttpResponse = await gatekeeperClient.createPayment(payout);
});

Then('the http response code is {int}', function (statusCode: number) {
  expect(this.HttpResponse.status).to.eq(
    statusCode,
    `Gatekeeper returned incorrect error code. Response : ${JSON.stringify(this.HttpResponse.body)}}`,
  );
});

Then('the response returns a payout id', function () {
  expect(this.HttpResponse.body.id, 'Payout Id should not be empty').to.not.be.empty;
  expect(
    this.HttpResponse.body.id,
    `Payout Id should begin with "pay_" but was ${this.HttpResponse.body.id}`,
  ).to.include('pay_');

  this.PayoutId = this.HttpResponse.body.id;
});

Then('the response returns a value date in the future', function () {
  const valueData = new Date(this.HttpResponse.body.value_date);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  expect(valueData, `value date "${valueData}" should be equal to or greater than "${currentDate}"`).at.least(
    currentDate,
  );
});
