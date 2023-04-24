import { Given } from '@cucumber/cucumber';

Given('an asset transfer request with meta null', function () {
  this.assetTransferRequest.meta = null;
});

Given('an asset transfer request with invalid meta source', function () {
  this.assetTransferRequest.meta.source = null;
});

Given('an asset transfer request with invalid meta source', function () {
  this.assetTransferRequest.meta.source = null;
});
