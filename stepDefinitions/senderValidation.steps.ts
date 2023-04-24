import { Given } from '@cucumber/cucumber';
Given('an asset transfer request with sender null', function () {
  this.assetTransferRequest.sender = null;
});

Given('an asset transfer request with sender type null', function () {
  this.assetTransferRequest.sender.type = null;
});

Given('an asset transfer request with invalid sender type', function () {
  this.assetTransferRequest.sender.type = 'individual';
});

Given('an asset transfer request with sender company name null', function () {
  this.assetTransferRequest.sender.companyName = null;
});

Given('an asset transfer request with sender address null', function () {
  this.assetTransferRequest.sender.address = null;
});

Given('an asset transfer request with sender address line 1 null', function () {
  this.assetTransferRequest.sender.address.line1 = null;
});

Given('an asset transfer request with sender city null', function () {
  this.assetTransferRequest.sender.address.city = null;
});

Given('an asset transfer request with sender address line 2 null', function () {
  this.assetTransferRequest.sender.address.line2 = null;
});

Given('an asset transfer request with sender state null', function () {
  this.assetTransferRequest.sender.address.state = null;
});

Given('an asset transfer request with sender postal code null', function () {
  this.assetTransferRequest.sender.address.postalCode = null;
});

Given('an asset transfer request with sender country code null', function () {
  this.assetTransferRequest.sender.address.countryCode = null;
});
