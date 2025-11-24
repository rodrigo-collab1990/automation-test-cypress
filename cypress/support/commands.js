import LoginLogic from '../fixtures/Logic/automacaoLogic';

// LOGIN + SALVAR COOKIES
Cypress.Commands.add('loginComCookies', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  LoginLogic.preencherCampoUsuario();
  LoginLogic.preencherCampoSenha();
  LoginLogic.clicarBotaoLogin();
  LoginLogic.validaLogin();

  cy.getCookies().then((cookies) => {
    cy.writeFile('cypress/fixtures/cookies.json', cookies);
  });
});

// RESTAURAR COOKIES
Cypress.Commands.add('restaurarCookies', () => {
  cy.readFile('cypress/fixtures/cookies.json').then((cookies) => {
    cy.clearCookies();

    cookies.forEach((cookie) => {
      cy.setCookie(cookie.name, cookie.value, {
        domain: cookie.domain,
        httpOnly: cookie.httpOnly,
        secure: cookie.secure,
        expiry: cookie.expiry,
        path: cookie.path
      });
    });
  });
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para impedir que o Cypress falhe o teste
  return false;
});