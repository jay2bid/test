import { Instruction, Source, Destination } from '../../common/models';

export class InstructionBuilder {
  private readonly instruction: Instruction;
  private readonly source: Source;
  private readonly destination: Destination;
  private balanceAsOf = '';

  constructor() {
    this.instruction = {};
    this.source = {};
    this.destination = {};
  }

  static new(): InstructionBuilder {
    return new InstructionBuilder();
  }

  withInstructionCountry(clientCountry: string): InstructionBuilder {
    this.instruction.country = clientCountry;
    return this;
  }

  withSourceType(type: string): InstructionBuilder {
    this.source.type = type;
    return this;
  }

  withSourceId(id: string): InstructionBuilder {
    this.source.id = id;
    return this;
  }

  withSourceCurrencyType(currencyType: string): InstructionBuilder {
    this.source.currencyType = currencyType;
    return this;
  }

  withSourceCurrency(currency: string): InstructionBuilder {
    this.source.currency = currency;
    return this;
  }

  withSourceAmount(amout: string): InstructionBuilder {
    this.source.amount = amout;
    return this;
  }

  withDestinationCurrencyType(currencyType: string): InstructionBuilder {
    this.destination.currencyType = currencyType;
    return this;
  }

  withDestinationCurrency(currency: string): InstructionBuilder {
    this.destination.currency = currency;
    return this;
  }

  withDestinationBlockchain(blockchain: string): InstructionBuilder {
    this.destination.blockchain = blockchain;
    return this;
  }

  withBalanceAsOfDateTimeNow(): InstructionBuilder {
    const now = new Date();
    const day = ('0' + now.getDate()).slice(-2);
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const year = now.getFullYear();
    this.balanceAsOf = year + '-' + month + '-' + day + 'T02:00:00+00:00';
    return this;
  }

  Build(): Instruction {
    if (this.source !== undefined && Object.keys(this.source).length) {
      this.instruction.source = this.source;
    }

    if (this.destination !== undefined && Object.keys(this.destination).length) {
      this.instruction.destination = this.destination;
    }

    if (this.balanceAsOf !== '') {
      this.instruction.balanceAsOf = this.balanceAsOf;
    }

    return this.instruction;
  }
}
