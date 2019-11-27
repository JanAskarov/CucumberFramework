@TEC-103 @ui @regressionTest
Feature: Etsy Search Functionality

  @TECTC-1011 @smokeTest
  Scenario Outline: Validate Etsy Search message
    Given Navigate Etsy Homepage
    When User searches for "<item>"
    Then Validate search message have word "<item>"
    Examples:
      | item   |
      | carpet |
      | 123    |

  @TECTC-1012

  Scenario Outline: Validate each department of Etsy has valid title
    Given Navigate Etsy Homepage
    When User clicks on "<department>"
    Then User validate title "<title>"
    Examples:
      | department            | title                         |
      | Jewelry & Accessories | Jewelry & Accessories \| Etsy |
      | Clothing & Shoes      | Clothing & Shoes \| Etsy      |
      | Home & Living         | Home & Living \| Etsy         |
      | Wedding & Party       | Wedding & Party \| Etsy       |
      | Toys & Entertainment  | Toys & Entertainment \| Etsy  |


      @TECTC-1013
      Scenario: Validate free shipping label on result items
        Given Navigate Etsy Homepage
        When User searches for "wireless phone charger"
        And User clicks on Free Shipping checkbox
        Then User verify all resulrs have "FREE shippin" label

  @TECTC-1014 @smokeTest
  Scenario: Validating over price functionality
    Given Navigate Etsy Homepage
    When User searches for "carpet"
    And User clicks on Over Price checkbox
    Then User verifies all items prices are over that price



