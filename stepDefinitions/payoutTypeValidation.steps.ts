import { Given } from '@cucumber/cucumber';
Given('an asset transfer request with payout type null', function () {
  this.assetTransferRequest.payoutType = null;
});

Given('an asset transfer request with invalid payout type', function () {
  this.assetTransferRequest.payoutType = 'ABC';
});
