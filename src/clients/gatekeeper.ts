import { toSnake } from 'snake-camel';
import request from 'supertest';
import { PayoutRequest, ValidationRequest } from '../common/models';
import { Response } from 'supertest';
import { ConfigurationService } from '../configuration/configurationService';

export class GatekeepeerClient {
  private gatekeeperUrl: string;
  private apiKey: string;
  private readonly createFxQuote = '/forex/quotes';

  async init(): Promise<void> {
    const configurationService = await ConfigurationService.getInstance();
    const gatekeeperApi = configurationService.getGatekeeperApi();
    this.gatekeeperUrl = gatekeeperApi.Uri;
    this.apiKey = gatekeeperApi.ApiKey;
  }

  async paymentsRequest(paymentsRequest: PayoutRequest, entityId: string): Promise<Response> {
    return await request(this.gatekeeperUrl)
      .post('/credit-transfer')
      .set('Cko-Entity-Id', entityId)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json')
      .timeout(4000)
      .send(JSON.stringify(paymentsRequest));
  }

  async createPayment(paymentsRequest: PayoutRequest): Promise<Response> {
    return await request(this.gatekeeperUrl)
      .post('/credit-transfer')
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json')
      .on('error', () => console.log(toSnake(paymentsRequest)))
      .timeout(4000)
      .send(toSnake(paymentsRequest));
  }

  async validationPayout(
    validationPayment: ValidationRequest,
    countryCode: string,
    currencyCode: string,
    type: string,
    accountHolderType: string,
  ): Promise<Response> {
    const typeParam = type ? `type=${type}&` : '';
    const accountHolderTypeParam = accountHolderType ? `account_holder_type=${accountHolderType}` : '';
    const queryParams = `?${typeParam}${accountHolderTypeParam}`;

    return await request(this.gatekeeperUrl)
      .post(`/validation/bank-accounts/${countryCode}/${currencyCode}${queryParams}`)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json')
      .timeout(4000)
      .send(toSnake(validationPayment));
  }

  async validationPayoutWithEntityHeader(
    validationPayment: ValidationRequest,
    countryCode: string,
    currencyCode: string,
    entityId: string,
    type: string,
    accountHolderType: string,
    paymentNetwork: string,
  ): Promise<Response> {
    const typeParam = type ? `type=${type}&` : '';
    const accountHolderTypeParam = accountHolderType ? `account_holder_type=${accountHolderType}&` : '';
    const paymentNetworkParam = paymentNetwork ? `payment_network=${paymentNetwork}&` : '';
    const queryParams = `?${typeParam}${accountHolderTypeParam}${paymentNetworkParam}`;

    return await request(this.gatekeeperUrl)
      .post(`/validation/bank-accounts/${countryCode}/${currencyCode}${queryParams}`)
      .set('Cko-Entity-Id', entityId)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json')
      .timeout(4000)
      .on('error', (response) => console.log(JSON.stringify(toSnake(response), null, 3)))
      .send(toSnake(validationPayment));
  }

  async createQuote(quoteRequest: any, entityId: string): Promise<Response> {
    return await request(this.gatekeeperUrl)
      .post(this.createFxQuote)
      .set('Cko-Entity-Id', entityId)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(quoteRequest));
  }

  async getValidationRules(
    countryCode: string,
    currencyCode: string,
    type: string,
    paymentNetwork: string,
  ): Promise<Response> {
    const typeParam = type ? `type=${type}&` : '';
    const paymentNetworkParam = paymentNetwork ? `payment_network=${paymentNetwork}&` : '';
    const queryParams = `?${typeParam}${paymentNetworkParam}`;

    return await request(this.gatekeeperUrl)
      .get(`/validation/bank-accounts/${countryCode}/${currencyCode}${queryParams}`)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json');
  }

  async getValidationRulesWithBearerToken(
    countryCode: string,
    currencyCode: string,
    type: string,
    bearerToken: string,
    paymentNetwork: string,
  ): Promise<Response> {
    const typeParam = type ? `type=${type}&` : '';
    const paymentNetworkParam = paymentNetwork ? `payment_network=${paymentNetwork}&` : '';
    const queryParams = `?${typeParam}${paymentNetworkParam}`;

    return await request(this.gatekeeperUrl)
      .get(`/validation/bank-accounts/${countryCode}/${currencyCode}${queryParams}`)
      .set('Authorization', `Bearer ${bearerToken}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json');
  }

  async getValidationRulesWithCkoEntityId(
    countryCode: string,
    currencyCode: string,
    entityId: string,
    type: string,
    paymentNetwork: string,
  ): Promise<Response> {
    const typeParam = type ? `type=${type}&` : '';
    const paymentNetworkParam = paymentNetwork ? `payment_network=${paymentNetwork}&` : '';
    const queryParams = `?${typeParam}${paymentNetworkParam}`;

    return await request(this.gatekeeperUrl)
      .get(`/validation/bank-accounts/${countryCode}/${currencyCode}${queryParams}`)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Cko-Entity-Id', entityId)
      .set('Content-Type', 'application/json');
  }

  async getValidationRulesWithCkoEntityIdAndApiKey(
    countryCode: string,
    currencyCode: string,
    entityId: string,
    type: string,
    paymentNetwork: string,
    apiKey: string,
  ): Promise<Response> {
    const typeParam = type ? `type=${type}&` : '';
    const paymentNetworkParam = paymentNetwork ? `payment_network=${paymentNetwork}&` : '';
    const queryParams = `?${typeParam}${paymentNetworkParam}`;

    return await request(this.gatekeeperUrl)
      .get(`/validation/bank-accounts/${countryCode}/${currencyCode}${queryParams}`)
      .set('Authorization', `ApiKey ${apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Cko-Entity-Id', entityId)
      .set('Content-Type', 'application/json');
  }

  async enableRoute(countryCode: string, currencyCode: string, entityId: string): Promise<Response> {
    return await request(this.gatekeeperUrl)
      .post(`/routes/${countryCode}/${currencyCode}`)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Cko-Entity-Id', entityId)
      .set('Content-Type', 'application/json');
  }

  async getRoutes(entityId: string): Promise<Response> {
    return await request(this.gatekeeperUrl)
      .get(`/routes`)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Cko-Entity-Id', entityId)
      .set('Content-Type', 'application/json');
  }

  async getSystemHealth(): Promise<Response> {
    console.log(this.gatekeeperUrl);
    return await request(this.gatekeeperUrl)
      .get(`/_system/health`)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json');
  }

  async assetTransferRequest(): Promise<Response> {
    console.log(this.gatekeeperUrl);
    return await request(this.gatekeeperUrl)
      .post(`/crypto/asset-transfer`)
      .set('Authorization', `ApiKey ${this.apiKey}`)
      .set('Cko-Version', '1')
      .set('Cko-Skip-Metrics', '1')
      .set('Content-Type', 'application/json')
      .send(
        '{"payout_type":"CryptoClientSettlement","sender":{"type":"corporate","company_name":"Checkout.com Ltd","address":{"line1":"Shepherdess Walk","line2":"Shoreditch","city":"London","state":"Greater London","postal_code":"N1 5LH","country":"UK"}},"recipient":{"payment_instrument_id":"src_cuykxgwtsibejicbvw2bxkhsqy","vault_account_id":"vact_7444djobabyejamfharuxvcjrq","reference":"000000000DO5","description":"000000000DO5","billing_descriptor":"000000000DO5"},"instruction":{"country":"US","source":{"type":"currency_account","id":"ca_zspxfszmstdutpoc5up6xgwami","currency_type":"fiat","currency":"USD","amount":10},"destination":{"currency_type":"crypto","currency":"USDC","blockchain":"ethereum"},"balance_as_of":"2022-04-07T00:00:00+00:00"},"client":{"client_id":"cli_dnl5iwh7dkmutbu3xytkynlsby","entity_id":"ent_o3kh574p2m2eto7mjr6izuzeou","entity_reference":"ent_o3kh574p2m2eto7mjr6izuzeou"},"meta":{"source":"ClientSettlements","payout_initiated_at":"2022-04-07T12:34:56+00:00"},"client_settlements":{"client_settlement_instruction":"csi_bqyti2rl5pku7eklhedmrz62e4","client_settlement_instruction_invocation":"csii_5swuaw2jgclvpjdqvpxqqf2kou"}}',
      );
  }
}

