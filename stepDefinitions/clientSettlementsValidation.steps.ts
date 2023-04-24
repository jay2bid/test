import { Given } from '@cucumber/cucumber';

Given('an asset transfer request with client settlements null', function () {
  this.assetTransferRequest.clientSettlements = null;
});

Given('an asset transfer request with client settlements instruction invalid', function () {
  this.assetTransferRequest.clientSettlements = {
    instruction: '',
  };
});

Given('an asset transfer request with client settlements instruction invocation invalid', function () {
  this.assetTransferRequest.clientSettlements = {
    instruction: 'SEPA',
    instructionInvocation: '',
  };
});
