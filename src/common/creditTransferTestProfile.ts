interface Instruction {
  country: string;
  purpose: string;
  source_amount: number;
  desired_value_date_behaviour: string;
  payment_network: string;
  destination_currency: string;
  destination_amount: number;
}

interface RecipientBillingAddress {
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface RecipientAccountHolderPhone {
  country_code: string;
  number: string;
}

interface RecipientAccountHolder {
  first_name: string;
  last_name: string;
  billing_address: RecipientBillingAddress;
  phone: RecipientAccountHolderPhone;
}

interface Recipient {
  account_type: string;
  account_number: string;
  bank_code: string;
  branch_code: string;
  swift_bic: string;
  fingerprint: string;
  reference: string;
  iban: string;
  card_expiry_month: string;
  card_expiry_year: string;
  payment_instrument_last_successfully_validated_at: string;
  account_holder: RecipientAccountHolder;
}

interface Sender {
  entity_first_name: string;
  entity_last_name: string;
  entity_address_line1: string;
  entity_address_city: string;
  entity_address_country: string;
  entity_reference: string;
}

interface MessageBody {
  instruction: Instruction;
  recipient: Recipient;
  sender: Sender;
}

interface PricingProfile {
  profile_name: string;
  valid_from: string;
  country_code: string;
  currency: string;
  scheme: string;
  charge_bearer: string;
  fee_currency: string;
  fee_amount: number;
}

export interface CreditTransferTestProfile {
  expected_return_status: number;
  error_text_contains: string;
  payout_amount: number;
  entity_id: string;
  pricing_profile: PricingProfile;
  message_body: MessageBody;
}
