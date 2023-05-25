const loginPage = require('../pageObjects/loginPage');
const data = require('../data/data.json');
const { I } = inject();

Given('I enter my credentials', () => {
    loginPage.goto();
})

When('I submit the session', () => {
    loginPage.fillLoginForm(data.username, data.password);
    loginPage.submitLoginForm();
})

Then('I see the product page', () => {
    I.seeInCurrentUrl('/inventory.html');
    I.see('Products');
})