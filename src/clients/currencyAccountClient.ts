import request from 'supertest';
import { ConfigurationService } from '../configuration/configurationService';

export class CurrencyAccountClient {
  private balancesUri: string;
  private currencyAccountUri: string;
  private currencyAccountApiKey: string;
  private balancesApiKey: string;
  private readonly createAccountPath = '/currency-account-api/currency-accounts';
  private readonly fundAccountPath = '/balances-api/change-balances';
  private readonly getCurrencyAccountPath = '/currency-account-api/currency-accounts/';
  private readonly getCurrencyAccountBalancePath = '/currency-account-api/currency-accounts/';

  async init() {
    const configurationService = await ConfigurationService.getInstance();
    const currencyAccountApi = configurationService.getCurrencyAccountApi();
    this.currencyAccountUri = currencyAccountApi.Uri;
    this.currencyAccountApiKey = currencyAccountApi.ApiKey;

    const balancesApi = configurationService.getBalancesApi();
    this.balancesUri = balancesApi.Uri;
    this.balancesApiKey = balancesApi.ApiKey;
  }

  async createCurrencyAccount(accountRequest: any) {
    return await request(this.currencyAccountUri)
      .post(this.createAccountPath)
      .set('ApiKey', this.currencyAccountApiKey)
      .set('Cko-Version', '1')
      .set('Content-Type', 'application/json')
      .on('error', (err) => console.log(err))
      .send(JSON.stringify(accountRequest));
  }

  async fundCurrencyAccount(fundRequest: any) {
    return await request(this.balancesUri)
      .post(this.fundAccountPath)
      .set('ApiKey', this.balancesApiKey)
      .set('Cko-Version', '1')
      .set('Content-Type', 'application/json')
      .on('error', (err) => console.log(err))
      .send(JSON.stringify(fundRequest));
  }

  async getCurrencyAccount(currencyAccountId: string) {
    const getAccountPath = this.getCurrencyAccountPath + currencyAccountId;
    return await request(this.currencyAccountUri)
      .get(getAccountPath)
      .set('ApiKey', this.currencyAccountApiKey)
      .set('Cko-Version', '1')
      .set('Content-Type', 'application/json')
      .on('error', (err) => console.log(err))
      .send();
  }

  async getCurrencyAccountBalance(currencyAccountId: string) {
    const path = this.getCurrencyAccountBalancePath + currencyAccountId + '/balances';
    return await request(this.currencyAccountUri)
      .get(path)
      .set('ApiKey', this.currencyAccountApiKey)
      .set('Cko-Version', '1')
      .set('Content-Type', 'application/json')
      .on('error', (err) => console.log(err))
      .send();
  }
}
