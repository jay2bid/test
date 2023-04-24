import { v4 as uuid } from 'uuid';

export class FundCurrencyAccountRequestBuilder {
  private currency?: string;
  private currencyAccountId?: string;
  private holdingAmount?: number;
  private processingAmount?: number;

  withCurrency(currency: string): FundCurrencyAccountRequestBuilder {
    this.currency = currency;
    return this;
  }

  withCurrencyAccountId(accountId: string): FundCurrencyAccountRequestBuilder {
    this.currencyAccountId = accountId;
    return this;
  }

  withHoldingAmount(amount: number): FundCurrencyAccountRequestBuilder {
    this.holdingAmount = amount;
    return this;
  }

  withProcessingAmount(amount: number): FundCurrencyAccountRequestBuilder {
    this.processingAmount = amount;
    return this;
  }

  build() {
    const correlationId = uuid();
    const commandId = uuid();

    return {
      correlation_id: correlationId,
      command_id: commandId,
      currency_account_id: this.currencyAccountId,
      origin: 'adjustments',
      created_on: new Date().toISOString(),
      actions: [
        {
          impact_type: 'top-up',
          changes: {
            available: {
              processing_amount: {
                currency_iso3_code: this.currency,
                amount: this.processingAmount,
              },
              holding_amount: {
                currency_iso3_code: this.currency,
                amount: this.holdingAmount,
              },
            },
          },
        },
      ],
    };
  }
}
