Feature: Login to Facebook
@RegressionTest
  Scenario Outline: Login to FB with valid UN and PWD
    Given user is on FB home page
    When user enters valid "<UN>" and "<PWD>"
    Then user homepage displays
    
   Examples:
   | UN                     | PWD        |
   | ali.hakeem20@gmail.com | hakd@n123$ |

@End2EndTest
  Scenario Outline: Login to FB with valid UN and PWD and log out
    Given user is on FB home page
    When user enters valid "<UN>" and "<PWD>"
    Then user homepage displays
    
   Examples:
   | UN                     | PWD        |
   | ali.hakeem20@gmail.com | hakd@n123$ |
   