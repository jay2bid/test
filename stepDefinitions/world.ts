import { Response } from 'supertest';
import { setWorldConstructor } from '@cucumber/cucumber';
import { RecipientBuilder } from '../src/builders/payoutsApi/recipientBuilder';
import { SenderBuilder } from '../src/builders/payoutsApi/senderBuilder';
import { AddressBuilder } from '../src/builders/payoutsApi/addressBuilder';
import { AssetTransferRequestBuilder } from '../src/builders/payoutsApi/assetTransferRequestBuilder';
const faker = require('faker');

declare module '@cucumber/cucumber' {
  interface PayoutRequestWorld {
    AssetTransferRequestBuilder: AssetTransferRequestBuilder;
    RecipientBuilder: RecipientBuilder;
    RecipientAddressBuilder: AddressBuilder;
    SenderBuilder: SenderBuilder;
    SenderAddressBuilder: AddressBuilder;
    EntityId: string;
    CurrencyAccountId: string;
    HttpResponse: Response;
    PayoutId: string;
  }
}

setWorldConstructor(function () {
  this.SenderBuilder = SenderBuilder.new();
  this.RecipientBuilder = RecipientBuilder.new();
  this.SenderBuilder = SenderBuilder.new();
  this.RecipientAddressBuilder = AddressBuilder.new();
  this.SenderAddressBuilder = AddressBuilder.new();
  this.faker = faker;
});
