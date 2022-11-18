Feature: showing off behave

  @TEST_TXR-56
  Scenario: run a simple test
    Given we have behave installed
    When we implement a test
    Then behave will test it for us!

  @TEST_TXR-55
  Scenario: Verify Book name.
    Given Book details.
    Then Verify book name.

  @TEST_TXR-58
  Scenario: Dashboard Search Page
    Given search query red
    Then should open search page with results of red

  @TEST_TXR-57
  Scenario: Login Page Bad Password
    Given login page with incorrect password
    Then credetials not correct should be shown

  @TEST_TXR-59
  Scenario: No Search Results should be shown
    Given search query alcndslkcnalnclka
    Then No search results found should be shown