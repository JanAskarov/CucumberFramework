Feature: : Authentication functionality


  Scenario:Create an account verify it is created by signing in
    Given Navigate to the Sing In page
    Then User clicks on Sing in Button
    And User types Email address
    Then User clicks on Create on account Button
    Then User types personal information
      | Title | First name | Last name | email             | password | date of birth | day | month | years |
      | Mr    | Jan        | Ask       | askarov@gmail.com | 12345    | 04/08/1992    | 4   | 8     | 1992  |
    Then User types Address
      | first name | last name | company    | address    | apt | City    | State    | zip   | Country | Phone number |
      | Jan        | Ask       | Techtorial | 2200 devon | 385 | Chicago | Illinois | 60000 | USA     | 3128888888   |

    Then User click on Register Button



