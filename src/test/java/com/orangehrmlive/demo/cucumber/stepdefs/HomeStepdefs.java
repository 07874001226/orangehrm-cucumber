package com.orangehrmlive.demo.cucumber.stepdefs;

import com.orangehrmlive.demo.pages.HomePage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class HomeStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter username\"([^\"]*)\"$")
    public void iEnterUsername(String name)  {
       new LoginPage().enterUserName(name);
    }

    @And("^I enter password\"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterpassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully and see welcometext$")
    public void iShouldLoginSuccessfullyAndSeeWelcometext() {
        Assert.assertEquals("Welcome Manojj", new LoginPage().verifyWelcomeText());
    }

    @When("^I click on welcome tab$")
    public void iClickOnWelcomeTab() {
        new HomePage().clickOnWelcomeButton();
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new HomePage().clickOnLogoutButton();
    }

    @Then("^I should logout successfully and see loginpanel text$")
    public void iShouldLogoutSuccessfullyAndSeeLoginpanelText() {
        Assert.assertEquals("LOGIN Panel", new HomePage().verifyLoginPanelText());
    }
}
