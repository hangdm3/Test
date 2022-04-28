Feature: Verify add customer function
  Scenario: Verify add new customer successfully
    Given Login with "test@qaa.com" username and "111111" password
    When I navigate to Customers page
    And I press on Create button
    And I enter FirstName as "Hang"
    And I enter LastName as "Do"
    And I enter Email as "dominhhang1982@gmail.com"
    And I enter Birthday as "1982-09-20"
    And I enter Address as "25 Han Thuyen"
    And I enter City as "Hanoi"
    And I enter State as "Hanoi"
    And I enter Password as "mypassword"
    And I enter Confirm password as "mypassword"
    And I press Save button
    Then I verify customer is created successfully
