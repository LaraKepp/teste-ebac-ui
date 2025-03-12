///<reference types="cypress"/>

describe('', () => {
    
 beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
 });

 afterEach(() => {
    cy.screenshot()
 });
        
it('Deve fazer login com sucesso', ()=>{
        
        cy.get('#username').type('larissa.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, larissa.teste (não é larissa.teste? Sair)')
    })

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    
    cy.get('#username').type('lariss@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')

});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    
    cy.get('#username').type('larissa.teste@teste.com.br')
    cy.get('#password').type('tes@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail larissa.teste@teste.com.br está incorreta. Perdeu a senha?')
});
});