import elementos from '../../fixtures/Page/automacaoPage';
import usuarios from '../../fixtures/usuarios';

const usuario = usuarios.gerarUsuario();

class LoginLogic {

    visitarPagina() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    preencherCampoUsuario() {
        cy.get(elementos.campoUsuario).type('Admin');
    }

    preencherCampoSenha() {
        cy.get(elementos.campoSenha).type('admin123')
    }

    clicarBotaoLogin() {
        cy.get(elementos.botaoLogin).click();
    }

    validaLogin() {
        cy.get(elementos.elementoValidaLogin).contains('Time at Work').should('be.visible');
    }

    clicarBotaoDaConta() {
        cy.get(elementos.botaoDaConta).click();
    }

    clicarBotaoLogOut() {
        cy.get(elementos.botaoLogout).contains('Logout').click();
    }

    validarLogOut() {
        cy.get(elementos.iconeTelaLogin).should('be.visible');
    }
    
    clicarBotaoAdmin() {
        cy.get(elementos.botaoAdmin).contains('Admin').click();
    }

    clicarBotaoAdd() {
        cy.get(elementos.botaoAdd).contains('Add').click();
    }

    preencherFormulario() {
        cy.get(elementos.selecionarFuncao).first().click();
        cy.get(elementos.opcaoAdmin).contains('Admin').click();
        cy.get(elementos.selecionarStatus).last().click();
        cy.get(elementos.opcaoEnabled).contains('Enabled').click();
        cy.get(elementos.nomeDoFuncionario).type('R');
        cy.get(elementos.selecionarFuncionario).eq(3).click();
        cy.get(elementos.campoUsername).eq(1).type(usuario);
        cy.get(elementos.campoPassword).first().type('203060Rfm*');
        cy.get(elementos.campoConfirmPassword).eq(2).type('203060Rfm*');
        cy.get(elementos.botaoSave).click();
    }

    validarSucessoCadastro() {
        cy.get('.oxd-toast').should('be.visible');
        cy.wait(1000);
    }
}

export default new LoginLogic();
