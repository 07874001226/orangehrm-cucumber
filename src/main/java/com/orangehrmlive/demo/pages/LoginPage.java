package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//input[@name='txtUsername']")
    WebElement userName;
    @FindBy(xpath = "//input[@name='txtPassword']")
    WebElement password;
    @FindBy(xpath = "//input[@name='Submit']")
    WebElement loginButton;
    @FindBy(xpath = "//a[@id='welcome']")
    WebElement welcomeText;

    public void enterUserName(String name) {
        sendTextToElement(userName, name);
        log.info("Enter user Name : " + userName.toString());
    }

    public void enterpassword(String password1) {
        sendTextToElement(password, password1);
        log.info("Enter password : " + password.toString());
    }

    public void clickOnLoginButton() {
        clickOnElement(loginButton);
        log.info("Clicking on Login button : " + loginButton.toString());
    }

    public String verifyWelcomeText() {
        log.info("Verify Welcome Text : " + welcomeText.toString());
        return getTextFromElement(welcomeText);
    }

}
