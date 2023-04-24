import {  setDefaultTimeout, BeforeAll, When, Then } from '@cucumber/cucumber';
import { GatekeepeerClient } from '../src/clients/gatekeeper';
import { expect } from 'chai';

const gatekeeperService = new GatekeepeerClient();

BeforeAll(async function () {
  await gatekeeperService.init();
  setDefaultTimeout(60000);
});

When('the GET routes endpoint is called', async function () {
  this.HttpResponse = await gatekeeperService.getRoutes(this.EntityId);
});

Then('the result should contain exactly the following', async function (table: any) {
  const expected = table.hashes();
  const routes = this.HttpResponse.body.routes;
  const routesNotFound = [];

  for (let i = 0; i < expected.length; i++) {
    if (!containsRow(routes, expected[i])) {
      routesNotFound.push(`${expected[i].country}:${expected[i].currency}:${expected[i].enabled}`);
    }
  }
  expect(routes.length).to.eq(expected.length, 'The response contains a different number of routes than expected.');
  expect(routesNotFound.length).to.eq(0, `The following routes were not found: ${routesNotFound}`);
});

const containsRow = (routes: any, row: any) => {
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].country === row.country
      && routes[i].currency === row.currency
      && routes[i].enabled.toString() === row.enabled) {
        return true;
      }
  }
  return false;
};