Feature: Login Test

  As a user I want to login on orangehrm website

  @Smoke,@Sanity,@Regression
  Scenario: User should login successfully
    Given  I am on homepage
    When I enter username"Admin"
    And I enter password"admin123"
    And I click on login button
    Then I should login successfully and see welcometext

    @Smoke,@Regression"
    Scenario: User shoul logout successfully
      Given  I am on homepage
      When I enter username"Admin"
      And I enter password"admin123"
      And I click on login button
      Then I should login successfully and see welcometext
      When I click on welcome tab
      And I click on logout button
      Then I should logout successfully and see loginpanel text