import { Client, Meta, Sender, AssetTransferRequest, ClientSettlement } from '../../common/models';
import { AddressBuilder } from './addressBuilder';
import { InstructionBuilder } from './instructionBuilder';
import { RecipientBuilder } from './recipientBuilder';
import { SenderBuilder } from './senderBuilder';
import { v4 as uuid } from 'uuid';

export class AssetTransferRequestBuilder {
  private payoutType: string;
  private readonly client: Client;
  private readonly meta: Meta;
  private readonly clientSettlements: ClientSettlement;

  constructor() {
    this.client = {};
    this.meta = {};
    this.clientSettlements = {};
  }

  static new(): AssetTransferRequestBuilder {
    return new AssetTransferRequestBuilder();
  }

  withPayoutType(payoutType: string): AssetTransferRequestBuilder {
    this.payoutType = payoutType;
    return this;
  }

  withMetaSource(source: string): AssetTransferRequestBuilder {
    this.meta.source = source;
    return this;
  }

  withClientId(clientId: string): AssetTransferRequestBuilder {
    this.client.clientId = clientId;
    return this;
  }

  withClientEntityId(entityId: string): AssetTransferRequestBuilder {
    this.client.entityId = entityId;
    return this;
  }

  withClientEntityReference(reference: string): AssetTransferRequestBuilder {
    this.client.entityReference = reference;
    return this;
  }

  withClientSettlements(): AssetTransferRequestBuilder {
    this.clientSettlements.clientSettlementInstruction = 'csi_' + uuid();
    this.clientSettlements.clientSettlementInstructionInvocation = 'csii_' + uuid();
    return this;
  }

  build(
    recipientBuilder: RecipientBuilder,
    senderAddressBuilder: AddressBuilder,
    senderBuilder: SenderBuilder,
    instructionBuilder: InstructionBuilder,
  ): AssetTransferRequest {
    const recipient = recipientBuilder?.build();
    const client: Client = this.client;
    const meta: Meta = this.meta;
    const sender: Sender = senderBuilder.Build(senderAddressBuilder.build());
    const payoutType: string = this.payoutType;
    const instruction = instructionBuilder?.Build();
    const clientSettlements = this.clientSettlements;

    return {
      sender,
      recipient,
      instruction,
      client,
      meta,
      clientSettlements,
      payoutType,
    };
  }
}
