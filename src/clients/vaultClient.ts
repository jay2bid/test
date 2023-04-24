import request from 'supertest';
import { ConfigurationService } from '../configuration/configurationService';

export class VaultClient {
  private url: string;
  private apiKey: string;
  private readonly vaultAccountId = 'vact_rkrbwdzas3lu3b4fjbnmi7wwbi';
  private readonly getPaymentInstructionPath = '/vault-api/instruments/';

  async init() {

    const configurationService = await ConfigurationService.getInstance();
    const vaultApi = configurationService.getVaultApi();
    this.url = vaultApi.Uri;
    this.apiKey = vaultApi.ApiKey;

  }

  async getPaymentInstruction(account: string) {
    const apiPath = this.getPaymentInstructionPath + account;
    return await request(this.url)
      .get(apiPath)
      .set('Vault-Account-Id', this.vaultAccountId)
      .set('Authorization', this.apiKey)
      .set('Cko-Version', '1')
      .set('Content-Type', 'application/json')
      .send();
  }
}
