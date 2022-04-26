Feature: Verify the login functions
  Scenario: Verify login with valid account
    Given I open the homepage
    When I enter "test@qaa.com" as username and "111111" as password
    When I press Sign In button
    Then I login successfully