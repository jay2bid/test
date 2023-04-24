Feature: Validating client information

    Scenario: Client is required and can't be null
        Given an asset transfer request with client null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_required"

    Scenario: Client ID is required and can't be null or empty
        Given an asset transfer request with client ID null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_client_id_required"

    Scenario: Entity ID is required and can't be null or empty
        Given an asset transfer request with entity ID null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_entity_id_required"

    Scenario: Legal entity code is required and can't be null or empty
        Given an asset transfer request with legal entity code null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_entity_cko_legal_entity_code_required"

    Scenario: Legal entity country code is required and can't be null or empty
        Given an asset transfer request with legal entity country code null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_entity_cko_legal_entity_country_code_required"

    Scenario: Entity name is required and can't be null or empty
        Given an asset transfer request with entity name null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_entity_name_required"

    Scenario: Entity reference is required and can't be null or empty
        Given an asset transfer request with entity reference null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_entity_reference_required"

    Scenario: Entity tax number is required and can't be null or empty
        Given an asset transfer request with entity tax number null
        When Gatekeeper's asset transfer endpoint is called
        Then the http response code for the asset transfer is 422
        And the error codes contains exactly "client_entity_tax_number_required"

