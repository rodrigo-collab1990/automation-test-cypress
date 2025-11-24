  import LoginLogic from '../fixtures/Logic/automacaoLogic';

  describe('Login com Cookies', () => {

    before(() => {
      // Só faz login 1 vez no início da suíte
      cy.loginComCookies();
    });

    beforeEach(() => {
      // Em cada it, apenas restaura os cookies
      cy.restaurarCookies();
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });

    it('Cadastrar um usuário', () => {
        LoginLogic.clicarBotaoAdmin();
        LoginLogic.clicarBotaoAdd();
        LoginLogic.clicarBotaoSelecionarFuncao();
        LoginLogic.clicarOpcaoAdmin();
        LoginLogic.selecionarStatus();
        LoginLogic.selecionarOpcaoEnabled();
        LoginLogic.preencherNomeFuncionario();
        LoginLogic.selecionarFuncionario();
        LoginLogic.preencherCampoUsername();
        LoginLogic.preenherCampoPassword();
        LoginLogic.preencherConfirmPassword();
        LoginLogic.clicarBotaoSave();
        LoginLogic.validarSucesso();
});

      it('Teste de Logout', () => {
      LoginLogic.clicarBotaoDaConta();
      LoginLogic.clicarBotaoLogOut();
      LoginLogic.validarLogOut();
  });
      
  });
