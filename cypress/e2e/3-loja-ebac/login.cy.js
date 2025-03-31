///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('larissa.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, larissa.teste (não é larissa.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

        cy.get('#username').type('lariss@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('larissa.teste@teste.com.br')
        cy.get('#password').type('tes@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail larissa.teste@teste.com.br está incorreta. Perdeu a senha?')
    });
    it('Deve fazer login com sucesso - Usando massa de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, larissa.teste (não é larissa.teste? Sair)')


    });
    it('Deve fazer login com sucesso - Usando Fixtures', () => {

        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false })
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, larissa.teste (não é larissa.teste? Sair)')

        })


    });

    it.only('Deve fazer login com sucesso - Usando Comandos Customizados', () => {
        cy.login('larissa.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, larissa.teste (não é larissa.teste? Sair)')
    });


});


