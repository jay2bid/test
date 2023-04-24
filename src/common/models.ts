export interface Address {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}
export interface AccountHolder {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  type?: string;
  billingAddress?: Address;
  identification?: Identification;
}
export interface Client {
  clientId?: string;
  entityId?: string;
  entityName?: string;
  entityMcc?: string;
  entityReference?: string;
}
export interface SubEntity {
  id?: string;
}
export interface ClientSettlementInstructionRequest {
  clientSettlementInstructionId?: string;
  threshold: string;
  cronSchedule: string;
  currencyAccountIds: string[];
  paymentInstrumentId: string;
  paymentNetwork?: string;
  description?: string;
}
export interface ForeignExchangeInstruction {
  quoteId?: string;
}
export interface Identification {
  type?: string;
  number?: string;
  issuingCountry?: string;
}
export interface Instruction {
  country?: string;
  source?: Source;
  destination?: Destination;
  balanceAsOf?: string;
}
export interface Source {
  type?: string;
  id?: string;
  currencyType?: string;
  currency?: string;
  amount?: string;
}
export interface Destination {
  currencyType?: string;
  currency?: string;
  blockchain?: string;
}
export interface Meta {
  source?: string;
}
export interface PayoutRequest {
  recipient?: Recipient;
  instruction?: Instruction;
  client?: Client;
  subEntity?: SubEntity;
  sender?: Sender;
  meta?: Meta;
  foreignExchangeInstruction?: ForeignExchangeInstruction;
}
export interface Recipient {
  paymentInstrumentId?: string;
  vaultAccountId?: string;
  reference?: string;
  description?: string;
  billingDescriptor?: string;
}
export interface Sender {
  type?: string;
  companyName?: string;
  address?: Address;
}
export interface ValidationRequest {
  recipient?: Recipient;
}
export interface AssetTransferRequest {
  sender?: Sender;
  recipient?: Recipient;
  instruction?: Instruction;
  client?: Client;
  meta?: Meta;
  clientSettlements?: ClientSettlement;
  payoutType?: string;
}
export interface ClientSettlement {
  clientSettlementInstruction?: string;
  clientSettlementInstructionInvocation?: string;
}
