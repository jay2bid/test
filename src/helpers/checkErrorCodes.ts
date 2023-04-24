import { expect } from 'chai';

export const checkErrorCodes = (listOfActualErrorCodes: string[], expectedErrorCodes: string[]) => {
  if (expectedErrorCodes.length === 0) {
    expect(undefined, `There are no error codes in the response body ${JSON.stringify(listOfActualErrorCodes)}`).to.eq(
      listOfActualErrorCodes,
    );
  } else {
    const missingErrorCodes = expectedErrorCodes.filter((x: string) => !listOfActualErrorCodes.includes(x));
    const additionalErrorCodes = listOfActualErrorCodes.filter((x: string) => !expectedErrorCodes.includes(x));

    expect(
      missingErrorCodes,
      `There are missing error codes. Could not find error code "${missingErrorCodes.toString()}" in the response body ${JSON.stringify(
        listOfActualErrorCodes,
      )}`,
    ).to.be.an('array').that.is.empty;

    expect(
      additionalErrorCodes,
      `There are additional error codes. Found error code "${additionalErrorCodes.toString()}" in the response body ${JSON.stringify(
        listOfActualErrorCodes,
      )}`,
    ).to.be.an('array').that.is.empty;

    expect(
      missingErrorCodes.concat(additionalErrorCodes),
      `Expecting "${expectedErrorCodes.toString()}" but was "${listOfActualErrorCodes.toString()}"`,
    ).to.be.an('array').that.is.empty;
  }
};
