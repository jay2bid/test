import { setDefaultTimeout, BeforeAll, Given } from '@cucumber/cucumber';

BeforeAll(function () {
  setDefaultTimeout(60000);
});

Given("the meta's source is {string}", async function (source: string) {
  this.PayoutRequestBuilder.withMetaSource(source);
});
