$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs a user I want to login on orangehrm website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5663803300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should login successfully",
  "description": "",
  "id": "login-test;user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username\"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password\"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should login successfully and see welcometext",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 305840700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 17
    }
  ],
  "location": "HomeStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 261543800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 17
    }
  ],
  "location": "HomeStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 168764800,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12051249000,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepdefs.iShouldLoginSuccessfullyAndSeeWelcometext()"
});
formatter.result({
  "duration": 63694800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome [Manojj]\u003e but was:\u003cWelcome [Paul]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.orangehrmlive.demo.cucumber.stepdefs.HomeStepdefs.iShouldLoginSuccessfullyAndSeeWelcometext(HomeStepdefs.java:35)\r\n\tat ✽.Then I should login successfully and see welcometext(src/test/java/resources/featurefile/homepage.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1929303400,
  "status": "passed"
});
formatter.before({
  "duration": 4896088400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User shoul logout successfully",
  "description": "",
  "id": "login-test;user-shoul-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter username\"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password\"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should login successfully and see welcometext",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on welcome tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should logout successfully and see loginpanel text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 17
    }
  ],
  "location": "HomeStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 150784700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 17
    }
  ],
  "location": "HomeStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 148662600,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12626888000,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepdefs.iShouldLoginSuccessfullyAndSeeWelcometext()"
});
formatter.result({
  "duration": 47426300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome [Manojj]\u003e but was:\u003cWelcome [Paul]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.orangehrmlive.demo.cucumber.stepdefs.HomeStepdefs.iShouldLoginSuccessfullyAndSeeWelcometext(HomeStepdefs.java:35)\r\n\tat ✽.Then I should login successfully and see welcometext(src/test/java/resources/featurefile/homepage.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomeStepdefs.iClickOnWelcomeTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeStepdefs.iClickOnLogoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeStepdefs.iShouldLogoutSuccessfullyAndSeeLoginpanelText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1401111500,
  "status": "passed"
});
});