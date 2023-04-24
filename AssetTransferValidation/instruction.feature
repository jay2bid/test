Feature: Validating instruction information

  Scenario: Instruction is required and can't be null
    Given an asset transfer request with instruction null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_required"

  Scenario: Instruction country is required and can't be null or empty
    Given an asset transfer request with instruction country invalid
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_country_required"

  Scenario: Instruction country has to be valid 2 letter ISO country code
    Given an asset transfer request with invalid instruction country format
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_country_invalid"

  Scenario: Instruction source is required and can't be null or empty
    Given an asset transfer request with instruction source null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_required"

  Scenario: Instruction source type is required and can't be null or empty
    Given an asset transfer request with instruction source type null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_type_required"

  Scenario: Instruction source type can only be currency account
    Given an asset transfer request with instruction source type invalid
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_type_invalid_option"

  Scenario: Instruction source id is required and can't be null or empty
    Given an asset transfer request with instruction source id null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_id_required"

  Scenario: Instruction source currency type is required and can't be null or empty
    Given an asset transfer request with instruction source currency type null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_currency_type_required"

  Scenario: Instruction source currency type can only be fiat
    Given an asset transfer request with instruction source currency type invalid
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_currency_type_invalid_option"

  Scenario: Instruction source currency is required and can't be null or empty
    Given an asset transfer request with instruction source currency null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_currency_required"

  Scenario: Instruction source currency can only be fiat
    Given an asset transfer request with instruction source currency invalid
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_currency_invalid_option"

  Scenario: Instruction source currency amount has to be greater than zero
    Given an asset transfer request with instruction source currency amount less than zero
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_source_amount_has_to_be_greater_than_zero"

  Scenario: Instruction balance as of is required and can't be null
    Given an asset transfer request with instruction balance as of null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_balance_as_of_required"

  Scenario: Instruction balance as of has to be valid datetime offset
    Given an asset transfer request with instruction balance as of invalid format
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_balance_as_of_invalid"

  Scenario: Instruction destination is required and can't be null
    Given an asset transfer request with instruction destination null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_required"

  Scenario: Instruction destination currency type is required and can't be null or empty
    Given an asset transfer request with instruction destination currency type null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_currency_type_required"

  Scenario: Instruction destination currency type can only be crypto
    Given an asset transfer request with instruction destination currency type invalid
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_currency_type_invalid"

  Scenario: Instruction destination currency is required and can't be null or empty
    Given an asset transfer request with instruction destination currency invalid
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_currency_required"

  Scenario: If instruction destination currency type is crypto then destination currency has to be valid
    Given an asset transfer request with instruction invalid destination currency
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_currency_invalid"

  Scenario: If instruction destination currency type is crypto then destination blockchain is required
    Given an asset transfer request with instruction destination blockchain null And the destination currency type is crypto
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_blockchain_required"

  Scenario: If instruction destination currency type is crypto then destination blockchain has to be valid
    Given an asset transfer request with invalid instruction destination blockchain
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_blockchain_invalid"

  Scenario: Instruction destination amount is required and can't be null or empty
    Given an asset transfer request with instruction destination amount null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_amount_required"

  Scenario: Instruction destination amount has to be greater than 0
    Given an asset transfer request with instruction destination amount invalid
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "instruction_destination_amount_has_to_be_greater_than_zero"

