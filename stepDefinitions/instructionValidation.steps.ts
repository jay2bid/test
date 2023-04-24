import { Given } from '@cucumber/cucumber';

Given('an asset transfer request with instruction null', function () {
  this.assetTransferRequest.instruction = null;
});

Given('an asset transfer request with instruction country invalid', function () {
  this.assetTransferRequest.instruction = {
    country: '',
  };
});

Given('an asset transfer request with invalid instruction country format', function () {
  this.assetTransferRequest.instruction = {
    country: 'ABC',
  };
});

Given('an asset transfer request with instruction source null', function () {
  this.assetTransferRequest.instruction.source = null;
});

Given('an asset transfer request with instruction source type null', function () {
  this.assetTransferRequest.instruction.source.type = null;
});

Given('an asset transfer request with instruction source type invalid', function () {
  this.assetTransferRequest.instruction.source.type = 'ABC';
});

Given('an asset transfer request with instruction source id null', function () {
  this.assetTransferRequest.instruction.source.id = null;
});

Given('an asset transfer request with instruction source currency type null', function () {
  this.assetTransferRequest.instruction.source.currency.type = null;
});

Given('an asset transfer request with instruction source currency type invalid', function () {
  this.assetTransferRequest.instruction.source.currency.type = 'ABC';
});

Given('an asset transfer request with instruction source currency null', function () {
  this.assetTransferRequest.instruction.source.currency.value = null;
});

Given('an asset transfer request with instruction source currency invalid', function () {
  this.assetTransferRequest.instruction.source.currency.value = 'ABC';
});

Given('an asset transfer request with instruction source currency amount less than zero', function () {
  this.assetTransferRequest.instruction.source.currency.amount = -1;
});

Given('an asset transfer request with instruction balance as of null', function () {
  this.assetTransferRequest.instruction.balanceAsOf = null;
});

Given('an asset transfer request with instruction balance as of invalid format', function () {
  this.assetTransferRequest.instruction.balanceAsOf = '2022-01-01T';
});

Given('an asset transfer request with instruction destination null', function () {
  this.assetTransferRequest.instruction.destination = null;
});

Given('an asset transfer request with instruction destination currency type null', function () {
  this.assetTransferRequest.instruction.destination.currency.type = null;
});

Given('an asset transfer request with instruction destination currency type invalid', function () {
  this.assetTransferRequest.instruction.destination.currency.type = 'fiat';
});

Given('an asset transfer request with instruction destination currency invalid', function () {
  this.assetTransferRequest.instruction.destination.currency.value = null;
});

Given('an asset transfer request with instruction invalid destination currency', function () {
  this.assetTransferRequest.instruction.destination.currency.value = 'ABC';
});

Given(
  'an asset transfer request with instruction destination blockchain null And the destination currency type is crypto',
  function () {
    this.assetTransferRequest.instruction.destination.currency.type = 'crypto';
    this.assetTransferRequest.instruction.destination.blockchain = null;
  },
);

Given('an asset transfer request with invalid instruction destination blockchain', function () {
  this.assetTransferRequest.instruction.destination.blockchain = 'ABC';
});

Given('an asset transfer request with instruction destination amount null', function () {
  this.assetTransferRequest.instruction.destination.amount = null;
});

Given('an asset transfer request with instruction destination amount invalid', function () {
  this.assetTransferRequest.instruction.destination.amount = -1;
});
