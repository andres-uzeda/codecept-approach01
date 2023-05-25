const I = actor();

module.exports = {
  // elementos de la página
  fields: {
    username: '#user-name',
    password: '#password',
  },
  buttons: {
    login: '#login-button',
  },
  goto() {
    I.amOnPage('https://www.saucedemo.com');
    I.see('Swag Labs');
  },
  // métodos de interacción con la página
  fillLoginForm(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
  },

  submitLoginForm() {
    I.click(this.buttons.login);
  },
};
