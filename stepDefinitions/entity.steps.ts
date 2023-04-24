import { Given, setDefaultTimeout, BeforeAll } from '@cucumber/cucumber';
import { expect } from 'chai';
import { ConfigurationService } from '../src/configuration/configurationService';
import { EntitiesClient } from '../src/clients/entitiesClient';


let configurationService: ConfigurationService;
const entitiesClient: EntitiesClient = new EntitiesClient();

BeforeAll(async function () {
  configurationService = await ConfigurationService.getInstance();
  await entitiesClient.init();
  setDefaultTimeout(60000);
});

Given('the entity id of {string} exists', async function (entityName: string) {
  this.EntityId = configurationService.getEntityId(entityName);
  console.log(`The Entity ID is ${this.EntityId}`);
  const response = await entitiesClient.getEntity(this.EntityId);
  expect(response.status).to.eq(200, "Marketplace API returned a failure, maybe entity doesn't exist?");
});

Given('the entity id is {string}', async function (entityId: string) {
  this.EntityId = entityId;
  console.log(`The Entity ID is ${this.EntityId}`);
});
