Feature: Login to the demo page

Scenario: Login to the demo page
  Given I enter my credentials
  When I submit the session
  Then I see the product page