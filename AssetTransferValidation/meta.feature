Feature: Validating meta information

    Scenario: Meta is required and can't be null
        Given an asset transfer request with meta null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "meta_required"

    Scenario: Source is required and can't be null or empty
        Given an asset transfer request with invalid meta source
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "meta_source_required"

    Scenario: Source has to be ClientSettlements
        Given an asset transfer request with invalid meta source
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "meta_source_invalid"
