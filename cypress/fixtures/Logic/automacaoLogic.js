import elementos from '../../fixtures/Page/automacaoPage';  

class LoginLogic {

    visitarPagina(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');        
    }

    preencherCampoUsuario() {
        cy.get(elementos.campoUsuario).type('Admin');
    }
            
    preencherCampoSenha(){
        cy.get(elementos.campoSenha).type('admin123')
    }

    clicarBotaoLogin(){
        cy.get(elementos.botaoLogin).click();    
    }

    validaLogin(){
        cy.get(elementos.elementoValidaLogin).contains('Time at Work').should('be.visible');
    }

    clicarBotaoDaConta(){
        cy.get(elementos.botaoDaConta).click();
    }
    clicarBotaoLogOut(){
        cy.get(elementos.botaoLogout).contains('Logout').click();
    }

    validarLogOut(){

        cy.get(elementos.iconeTelaLogin).should('be.visible');
    }
    clicarBotaoAdmin(){
        cy.get(elementos.botaoAdmin).contains('Admin').click();
    }

    clicarBotaoAdd(){
        cy.get(elementos.botaoAdd).contains('Add').click();

    }
    clicarBotaoSelecionarFuncao(){
        cy.get(elementos.selecionarFuncao).first().click();
    }
    clicarOpcaoAdmin(){
        cy.get(elementos.opcaoAdmin).contains('Admin').click();
    }

    selecionarStatus(){
        cy.get(elementos.selecionarStatus).last().click();
    }

    selecionarOpcaoEnabled(){
        cy.get(elementos.opcaoEnabled).contains('Enabled').click();
    }
    preencherNomeFuncionario(){
        cy.get(elementos.nomeDoFuncionario).type('R');
    }

    selecionarFuncionario(){
        cy.get(elementos.selecionarFuncionario).eq(3).click();
    }

    preencherCampoUsername(){
        cy.get(elementos.campoUsername).eq(1).type('rblgd90_ct2');
    }
    preenherCampoPassword(){
        cy.get(elementos.campoPassword).first().type('203060Rfm*');
    }

    preencherConfirmPassword(){
        cy.get(elementos.campoConfirmPassword).eq(2).type('203060Rfm*');
    }

    clicarBotaoSave(){
        cy.get(elementos.botaoSave).click();
    }
    validarSucesso(){
        cy.get('.oxd-toast').should('be.visible');
    }
}

export default new LoginLogic();
