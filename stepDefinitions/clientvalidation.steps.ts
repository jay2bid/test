import { Given } from '@cucumber/cucumber';

Given('an asset transfer request with client null', function () {
  this.assetTransferRequest.client = null;
});

Given('an asset transfer request with client ID null', function () {
  this.assetTransferRequest.client.client_id = null;
});

Given('an asset transfer request with entity ID null', function () {
  this.assetTransferRequest.client.entity_id = null;
});

Given('an asset transfer request with legal entity code null', function () {
  this.assetTransferRequest.client.entity_cko_legal_entity_code = null;
});

Given('an asset transfer request with legal entity country code null', function () {
  this.assetTransferRequest.client.entity_cko_legal_entity_country_code = null;
});

Given('an asset transfer request with entity name null', function () {
  this.assetTransferRequest.client.entity_name = null;
});

Given('an asset transfer request with entity reference null', function () {
  this.assetTransferRequest.client.entity_reference = null;
});

Given('an asset transfer request with entity tax number null', function () {
  this.assetTransferRequest.client.entity_tax_number = null;
});
