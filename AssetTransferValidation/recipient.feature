Feature: Validating recipient information

    Scenario: Recipient is required and can't be null
        Given an asset transfer request with recipient null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "recipient_required"

    Scenario: Payment instrument ID is required and can't be null or empty
        Given an asset transfer request with recipient payment instrument ID null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "recipient_payment_instrument_id_required"

    Scenario: Payment instrument ID has to start with 'src_'
        Given an asset transfer request with invalid recipient payment instrument ID
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "recipient_payment_instrument_id_invalid"

    Scenario: Vault account ID is required and can't be null or empty
        Given an asset transfer request with recipient vault account ID null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "recipient_vault_account_id_required"

    Scenario: Vault account ID has to start with 'vact_'
        Given an asset transfer request with invalid recipient vault account ID
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "recipient_vault_account_id_invalid"

    Scenario: Reference is required and can't be null or empty
        Given an asset transfer request with recipient reference null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "recipient_reference_required"

    Scenario: Description is required and can't be null or empty
        Given an asset transfer request with recipient description null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "recipient_description_required"

    Scenario: Billing descriptor is required and can't be null or empty
        Given an asset transfer request with recipient billing descriptor null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "recipient_billing_descriptor_required"
