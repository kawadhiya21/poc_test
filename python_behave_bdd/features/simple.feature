Feature: showing off behave

  Scenario: run a simple test
    Given we have behave installed
    When we implement a test
    Then behave will test it for us!

  Scenario: Verify Book name.
    Given Book details.
    Then Verify book name.


  Scenario: Dashboard Search Page
    Given search query red
    Then should open search page with results of red


  Scenario: Login Page Bad Password
    Given login page with incorrect password
    Then credetials not correct should be shown

  Scenario: No Search Results should be shown
    Given search query alcndslkcnalnclka
    Then No search results found should be shown
