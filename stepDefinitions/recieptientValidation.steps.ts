import { Given } from '@cucumber/cucumber';
Given('an asset transfer request with recipient null', function () {
  this.assetTransferRequest.recipient = null;
});

Given('an asset transfer request with recipient payment instrument ID null', function () {
  this.assetTransferRequest.recipient.paymentInstrumentId = null;
});

Given('an asset transfer request with invalid recipient payment instrument ID', function () {
  this.assetTransferRequest.recipient.paymentInstrumentId = 'abc';
});

Given('an asset transfer request with recipient vault account ID null', function () {
  this.assetTransferRequest.recipient.vaultAccountId = null;
});

Given('an asset transfer request with invalid recipient vault account ID', function () {
  this.assetTransferRequest.recipient.vaultAccountId = 'abc';
});

Given('an asset transfer request with recipient reference null', function () {
  this.assetTransferRequest.recipient.reference = null;
});

Given('an asset transfer request with recipient description null', function () {
  this.assetTransferRequest.recipient.description = null;
});

Given('an asset transfer request with recipient billing descriptor null', function () {
  this.assetTransferRequest.recipient.billingDescriptor = null;
});
