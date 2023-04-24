import { Recipient } from '../../common/models';

export class RecipientBuilder {
  private readonly recipient: Recipient = {};

  constructor() {}

  static new(): RecipientBuilder {
    return new RecipientBuilder();
  }

  withPaymentInstrumentId(paymentInstrumentId: string): RecipientBuilder {
    this.recipient.paymentInstrumentId = paymentInstrumentId;
    return this;
  }

  withVaultAccountId(vaultAccountId: string): RecipientBuilder {
    this.recipient.vaultAccountId = vaultAccountId;
    return this;
  }

  withDescription(description: string): RecipientBuilder {
    this.recipient.description = description;
    return this;
  }

  withRecipientReference(reference: string): RecipientBuilder {
    this.recipient.reference = reference;
    return this;
  }

  withRecipientBillingDescriptor(billingDescriptor: string): RecipientBuilder {
    this.recipient.billingDescriptor = billingDescriptor;
    return this;
  }

  build(): Recipient {
    return this.recipient;
  }
}
