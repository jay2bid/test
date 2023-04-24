export interface Configuration {
  Entities: Entities;
  Apis: Apis;
  SecretsManager: SecretsManagerConfig;
}
export interface Apis {
  CurrencyAccountsApi: ApiSetting;
  BalancesApi: ApiSetting;
  GatekeeperApi: ApiSetting;
  EntitiesApi: ApiSetting;
  PricingProfileApi: ApiSetting;
  VaultApi: ApiSetting;
  ClientSettlementsApi: ApiSetting;
  AccessApi: ApiSetting;
}
export interface ApiSetting {
  Uri: string;
  ApiKey: string;
}
export interface Entities {
  [key: string]: Entity;
}
export interface SecretsManagerConfig {
  ServiceUrl: string;
  AuthenticationRegion: string;
}
export interface Entity {
  EntityId: string;
}
