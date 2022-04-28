Feature: Verify search poster function
  Scenario: Search the poster
    Given I login with "test@qaa.com" username and "111111" password
    When I navigate to Posters page
    And I search for "Alone Jogger" poster
    Then I verify the search result
