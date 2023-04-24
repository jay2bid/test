export class CreateCurrencyAccountRequestBuilder {
  private entityId? = '';
  private holdingCurrency? = '';

  withEntityId(entityId: string): CreateCurrencyAccountRequestBuilder {
    this.entityId = entityId;
    return this;
  }

  withHoldingCurrency(currency: string): CreateCurrencyAccountRequestBuilder {
    this.holdingCurrency = currency;
    return this;
  }

  build() {
    return {
      holding_currency: this.holdingCurrency,
      entity_ids: [this.entityId],
    };
  }
}
