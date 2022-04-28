Feature: Verify search poster function
  Scenario: Search the poster
    Given I login with "test@qaa.com" username and "111111" password
    When I navigate to "Posters" page
    And I click on the third item
    Then the details of third item is displayed correctly
