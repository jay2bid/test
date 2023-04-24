import { Sender, Address } from '../../common/models';

export class SenderBuilder {
  private readonly sender: Sender;

  constructor() {
    this.sender = {};
  }

  static new(): SenderBuilder {
    return new SenderBuilder();
  }

  withSenderType(type: string): SenderBuilder {
    this.sender.type = type;
    return this;
  }

  withSenderCompanyName(companyName: string): SenderBuilder {
    this.sender.companyName = companyName;
    return this;
  }

  Build(address?: Address): Sender {
    if (address !== undefined && Object.keys(address).length) {
      this.sender.address = address;
    }

    return this.sender;
  }
}
