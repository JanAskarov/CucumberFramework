@TEC-102 @ui @smokeTest @regressionTest
Feature: Adding Order


  Scenario: Verify create order functionality

    Given Navigate to login page
    Then User logs in with valid credentials username "Tester" password "test"
    And User clicks on Order
    Then User creates new order
      | Product Name | Quantity | Customer Name | Street     | City    | State | Zip   | Card Nr   | Expire Date |
      | ScreenSaver  | 2        | Techtorial    | 123 N tech | Chicago | IL    | 60000 | 123123123 | 12/21       |
    Then User verifies Order is created

  Scenario: Verify create order functionality with invalid data
    Given Navigate to login page
    Then User logs in with invalid credentials username "Tester" password "test"
    And User clicks on order
    Then User creates new order
      | Product Name | Quantity | Customer Name | Street     | City    | State | Zip   | Card Number | Expired Date |
      | ScreenSaver  | 2        | Techtorial    | 123 N Tech | Chicago | IL    | 6jhsb | 718292      | 12/21        |
    Then User verifies order "is NOT" created


  @TECTC-1015

  Scenario Outline: Verify Delete functionality
    Given Navigate to login page
    Then User logs in with valid credentials username "Tester" password "test"
    And User deletes "<Name>" from table
    Then Validate that "<Name>" is deleted
    Examples:
      | Name           |
      | Mark Smith     |
      | Samuel Clemens |
      | Paul Brown     |





