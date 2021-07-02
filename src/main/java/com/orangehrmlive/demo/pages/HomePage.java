package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

@FindBy(xpath = "//a[@href='/index.php/auth/logout']")
    WebElement logoutButton;
@FindBy(xpath = "//div[@id='logInPanelHeading']")
    WebElement loginPanel;
    @FindBy(xpath = "//a[@id='welcome']")
    WebElement welcomeText;

    public void clickOnLogoutButton() {
        clickOnElement(logoutButton);
        log.info("Clicking on Logout button : " + logoutButton.toString());
    }
    public void clickOnWelcomeButton() {
        clickOnElement(welcomeText);
        log.info("Clicking on Welcome button : " + welcomeText.toString());
    }

    public String verifyLoginPanelText() {
        log.info("Verify loginpanel Text : " + loginPanel.toString());
        return getTextFromElement(loginPanel);
    }


}
