import request from 'supertest';
import { ConfigurationService } from '../configuration/configurationService';
export class EntitiesClient {
  private url: string;
  private apiKey: string;
  private readonly getEntityPath = '/entities/';
  private readonly getEntitySummaryPath = '/entity/';

  async init() {
    const configurationService = await ConfigurationService.getInstance();
    const entitiesApi = configurationService.getEntitiesApi();
    this.url = entitiesApi.Uri;
    this.apiKey = entitiesApi.ApiKey;
  }

  async getEntity(entityId: string) {
    const apiPath = this.getEntityPath + entityId;
    return await request(this.url)
      .get(apiPath)
      .set('X-API-KEY', this.apiKey)
      .set('Cko-Version', '2')
      .set('Content-Type', 'application/json')
      .send();
  }

  async getEntitySummary(entityId: string) {
    const apiPath = this.getEntitySummaryPath + entityId;
    return await request(this.url)
      .get(apiPath)
      .set('X-API-KEY', this.apiKey)
      .set('Cko-Version', '2')
      .set('Content-Type', 'application/json')
      .send();
  }
}
