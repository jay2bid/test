Feature: Validating client settlements information

    Scenario: Client settlements is required and can't be null
        Given an asset transfer request with client settlements null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_settlements_required"

    Scenario: Client settlements instruction is required and can't be null or empty
        Given an asset transfer request with client settlements instruction invalid
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_settlements_client_settlement_instruction_required"

    Scenario: Client settlements instruction invocation is required and can't be null or empty
        Given an asset transfer request with client settlements instruction invocation invalid
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_settlements_client_settlement_instruction_invocation_required"
