import { expect } from 'chai';
import { When, Then, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { GatekeepeerClient } from '../src/clients/gatekeeper';

const gatekeeperClient = new GatekeepeerClient();

BeforeAll(async function () {
  setDefaultTimeout(60000);
  await gatekeeperClient.init();
});

When("Gatekeeper's asset transfer endpoint is called", async function () {
  this.HttpResponse = await gatekeeperClient.assetTransferRequest();
});

Then('the http response code for the asset transfer is 202', async function () {
  const healthCheckResponse = this.HttpResponse;
  expect(healthCheckResponse).to.not.be.undefined;
  expect(healthCheckResponse).to.not.be.null;
  expect(healthCheckResponse.status).to.eq(202);
});

Then('the http response code for the asset transfer is 422', async function () {
  const healthCheckResponse = this.HttpResponse;
  expect(healthCheckResponse).to.not.be.undefined;
  expect(healthCheckResponse).to.not.be.null;
  expect(healthCheckResponse.status).to.eq(422);
});
