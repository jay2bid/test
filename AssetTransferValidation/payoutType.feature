Feature: Validating payout type

    Scenario: Payout type is required and can't be null or empty
        Given an asset transfer request with payout type null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "payout_type_required"

    Scenario: Payout type has to be CryptoClientSettlement
        Given an asset transfer request with invalid payout type
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "payout_type_invalid"
