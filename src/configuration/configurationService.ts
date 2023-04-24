import { Configuration, ApiSetting } from '../common/configuration';
import { getSecrets } from '../services/secretsManager';

export class ConfigurationService {
  private configuration: Configuration;
  private static instance: ConfigurationService;
  private environmentList = ['localstack', 'dev', 'qa'];

  static async getInstance(): Promise<ConfigurationService> {
    if (!ConfigurationService.instance) {
      const configurationService = new ConfigurationService();
      await configurationService.build();
      ConfigurationService.instance = configurationService;
    }

    return ConfigurationService.instance;
  }

  async build() {
    const environment: string = process.env.E2E_HOSTENV as string;
    console.log(`Loading ${environment} from environment`);

    if (!this.environmentList.includes(environment.toLowerCase())) {
      throw new Error(`Environment - ${environment} not supported`);
    }

    const configuration: Configuration = <Configuration>require(`../settings.${environment}.json`);

    if (configuration.SecretsManager) {
      console.log(JSON.stringify(configuration.SecretsManager));
    }

    const remoteSecrets = await getSecrets(configuration.SecretsManager);
    remoteSecrets.forEach((value) => {
      Object.values(configuration.Apis).forEach((api) => {
        if (value.Name === api['Name']) {
          if (value.ApiKey) {
            api['ApiKey'] = value.ApiKey;
          }
        }
      });
    });
    this.configuration = configuration;
  }

  getEntityId(name: string) {
    const entity = this.configuration.Entities[name];
    if (entity == null) {
      throw new Error(`Entity Not found ${name}`);
    }
    return entity.EntityId;
  }

  getCurrencyAccountApi(): ApiSetting {
    const apiSetting = this.configuration.Apis.CurrencyAccountsApi;
    if (apiSetting == null) {
      throw new Error(`Not found configuration.Apis.CurrencyAccountsApi`);
    }
    return apiSetting;
  }

  getBalancesApi(): ApiSetting {
    const apiSetting = this.configuration.Apis.BalancesApi;
    if (apiSetting == null) {
      throw new Error(`Not found configuration.Apis.BalancesApi`);
    }
    return apiSetting;
  }

  getEntitiesApi(): ApiSetting {
    const apiSetting = this.configuration.Apis.EntitiesApi;
    if (apiSetting == null) {
      throw new Error(`Not found configuration.Apis.EntitiesApi`);
    }
    return apiSetting;
  }

  getGatekeeperApi(): ApiSetting {
    const apiSetting = this.configuration.Apis.GatekeeperApi;
    if (apiSetting == null) {
      throw new Error(`Not found configuration.Apis.GatekeeperApi`);
    }
    return apiSetting;
  }

  getPricingProfileApi(): ApiSetting {
    const apiSetting = this.configuration.Apis.PricingProfileApi;
    if (apiSetting == null) {
      throw new Error(`Not found configuration.Apis.PricingProfileApi`);
    }
    return apiSetting;
  }

  getVaultApi(): ApiSetting {
    const apiSetting = this.configuration.Apis.VaultApi;
    if (apiSetting == null) {
      throw new Error(`Not found configuration.Apis.VaultApi`);
    }
    return apiSetting;
  }
}
