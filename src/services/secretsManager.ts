import * as AWS from 'aws-sdk';
import { SecretsManagerConfig } from '../common/configuration';
interface Secrets {
  AccessKeys: Array<AccessKey>;
  ApiKeys: Array<APIKey>;
}

interface AccessKey {
  Name: string;
  EntityId: string;
  AccessKeyId: string;
  AccessKeySecret: string;
}

interface APIKey {
  Name: string;
  ApiKey: string;
}

const region = 'eu-west-1';
const secretName = 'ptca-end-to-end-testing';
let secret: string | undefined;


export const getSecrets = async (secretsManager?: SecretsManagerConfig): Promise<APIKey[]> => {

  const client = secretsManager ? new AWS.SecretsManager({
    region: secretsManager.AuthenticationRegion,
    endpoint: secretsManager.ServiceUrl
  })
  : new AWS.SecretsManager({
    region: region,
  });

  return new Promise((resolve, reject) => {
    client.getSecretValue({ SecretId: secretName }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if ('SecretString' in data) {
          secret = data.SecretString;
        } else {
          reject(new Error('Expecting a SecretString but got a binary'));
        }
      }
      //Parsing secret JSON object
      let secrets: Secrets;
      if (secret != null) {
        secrets = JSON.parse(secret);
        resolve(secrets.ApiKeys);
      }
    });
  });
};
