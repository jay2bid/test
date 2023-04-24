import { Given, setDefaultTimeout, BeforeAll } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CurrencyAccountClient } from '../src/clients/currencyAccountClient';
import { FundCurrencyAccountRequestBuilder } from '../src/builders/currencyAccountApi/fundCurrencyAccountRequestBuilder';
import { CreateCurrencyAccountRequestBuilder } from '../src/builders/finlab/newAccountRequestBuilder';

const currencyAccountService: CurrencyAccountClient = new CurrencyAccountClient();

BeforeAll(async function () {
  setDefaultTimeout(60000);
  await currencyAccountService.init();
});

Given('a currency account is created with a holding currency of {string}', async function (holdingCurrency: string) {
  const msgBody = new CreateCurrencyAccountRequestBuilder()
    .withEntityId(this.EntityId)
    .withHoldingCurrency(holdingCurrency)
    .build();
  const response = await currencyAccountService.createCurrencyAccount(msgBody);
  expect(response.status).to.eq(201, 'Currency Account API returned a failed whilst creating currency account');
  expect(response.body.status).to.eq('Active', 'Newly created currency account is not active');
  this.CurrencyAccountId = response.body.id;
  console.log(`Newly created currency account ID: ${this.CurrencyAccountId}`);
});

Given('a currency account is created with a holding currency of {string} for the sub entity', async function (holdingCurrency: string) {
  const msgBody = new CreateCurrencyAccountRequestBuilder()
    .withEntityId(this.SubEntityId)
    .withHoldingCurrency(holdingCurrency)
    .build();
  const response = await currencyAccountService.createCurrencyAccount(msgBody);
  expect(response.status).to.eq(201, 'Currency Account API returned a failed whilst creating currency account');
  expect(response.body.status).to.eq('Active', 'Newly created currency account is not active');
  this.CurrencyAccountId = response.body.id;
  console.log(`Newly created currency account ID: ${this.CurrencyAccountId}`);
});

Given('the currency account is funded with {int} {string}', async function (amount: number, holdingCurrency: string) {
  console.log(`Funding currency account ' + ${this.CurrencyAccountId}`);
  const fundAccountMsgBody = new FundCurrencyAccountRequestBuilder()
    .withCurrency(holdingCurrency)
    .withCurrencyAccountId(this.CurrencyAccountId)
    .withHoldingAmount(amount)
    .withProcessingAmount(amount)
    .build();
  const fundAccountResponse = await currencyAccountService.fundCurrencyAccount(fundAccountMsgBody);
  expect(fundAccountResponse.status).to.eq(201, 'Finlab returned a failure whilst funding a currency account');
  console.log(`Currency account ${this.CurrencyAccountId} has been funded`);
});

Given('retrieval of initial currency account balances', async function () {
  const response = await currencyAccountService.getCurrencyAccountBalance(this.currencyAccountId);
  expect(response.status).to.eq(200, 'Finlab returned a failure whilst getting the currency account balance');
  this.initialPendingBalance = response.body.balances.pending;
  this.initialAvailableBalance = response.body.balances.available;
  this.initialPayableBalance = response.body.balances.payable;

  console.log('Initial currency account balances:');
  console.log(`pending: ${response.body.balances.pending}`);
  console.log(`available: ${response.body.balances.available}`);
  console.log(`payable: ${response.body.balances.payable}`);
});
