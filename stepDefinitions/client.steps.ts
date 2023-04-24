import { Given } from '@cucumber/cucumber';

Given("the client's entity is set", function () {
  this.PayoutRequestBuilder.withClientEntityId(this.EntityId);
});
