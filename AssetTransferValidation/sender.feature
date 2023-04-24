Feature: Validating sender information

  Scenario: Sender is required and can't be null
    Given an asset transfer request with sender null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "sender_required"

  Scenario: Sender type is required and can't be null or empty
    Given an asset transfer request with sender type null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "sender_type_required"

  Scenario: Sender type has to be corporate
    Given an asset transfer request with invalid sender type
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "sender_type_invalid"

  Scenario: Company name is required and can't be null or empty
    Given an asset transfer request with sender company name null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "sender_company_name_required"

  Scenario: Address is required and can't be null
    Given an asset transfer request with sender address null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "sender_address_required"

  Scenario: Address line 1 is required and can't be null or empty
    Given an asset transfer request with sender address line 1 null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
    And the error codes contains exactly "sender_address_line1_required"

  Scenario: City is required and can't be null or empty
    Given an asset transfer request with sender city null
    When Gatekeeper's asset transfer endpoint is called
    Then the http response code for the asset transfer is 422
