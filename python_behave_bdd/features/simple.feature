Feature: 

  @TEST_TXR-111
  Scenario: Login Page Bad Password
    Given login page with incorrect password
    Then credetials not correct should be shown
  @TEST_TXR-110
  Scenario: No Search Results should be shown
    Given search query alcndslkcnalnclka
    Then No search results found should be shown
  @TEST_TXR-109
  Scenario: Verify Book name.
    Given Book details.
    Then Verify book name.
  @TEST_TXR-108
  Scenario: Dashboard Search Page
    Given search query red
    Then should open search page with results of red
  @TEST_TXR-107
  Scenario: run a simple test
    Given we have behave installed
    When we implement a test
    Then behave will test it for us!
