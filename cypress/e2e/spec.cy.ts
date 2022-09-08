/* eslint-disable no-undef */

describe('Todos os testes de integração', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('Testes dos elementos presentes no Header', () => {
    // cy.fixture('mockList').then((mockList) => {
    //   cy.intercept('GET', '**pokemon', {
    //     statusCode: 200,
    //     body: mockList,
    //   }).as('mockList');
    // });
    // cy.visit('https://pokemon-monocard.vercel.app/');
    it('Todos os elementos são renderizados corretamente', () => {
      cy.get('[data-cy=pokemon-logo]');
      cy.get('[data-cy=monocard-logo]');
      cy.get('[data-cy=pokebola-link]');
      cy.get('[data-cy=list-link]');
    });
    it('O link para a pagina de lista funciona corretamente', () => {
      cy.get('[data-cy=list-link]').click();
      cy.url().should('be.equal', 'http://localhost:3000/list');
    });
    it('O link para a pagina da pokebola funciona corretamente', () => {
      cy.get('[data-cy=pokebola-link]').click();
      cy.url().should('be.equal', 'http://localhost:3000/');
    });
  });

  describe('Testes da pokebola e do pokemon', () => {
    before(() => {
      cy.fixture('mockPokemon').then((mockPokemon) => {
        cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/**', {
          statusCode: 200,
          body: mockPokemon,
        }).as('mockPokemon');
      });
    });
    it('A pokebola é renderiza corretamente e pode ser clicada', () => {
      cy.get('[data-cy=pokeball]').click();
    });
    it('O pokemon é renderizado corretamente', () => {
      cy.get('[data-cy=pokemon]');
      cy.get('[data-cy=pokemon-name]').contains('João José');
    });
    it('O usuário pode alterar o nome do pokemon', () => {
      cy.get('[data-cy=pokemon-name]').click();
      cy.get('[data-cy=newName-input]').type(', o eterno');
      cy.get('[data-cy=confirmNewName-btn]').click();
      cy.get('[data-cy=pokemon-name]').contains('João José, o eterno');
    });
    // it('O usuário consegue adicionar contatos', () => {
    //   cy.get('[data-cy=pokemon-name]').click();
    //   cy.get('[data-cy=newName-input]').type('Jonas Silva');
    //   cy.get('[data-cy=confirmNewName-btn]').click();
    //   cy.get('[data-cy=pokemon-name]').contains('Jonas Silva');
    // });
  });

  // describe('Teste do btn para escolher outro pokemon', () => {
  //   before(() => {
  //     cy.fixture('mockPokemon2').then((mockPokemon2) => {
  //       cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/**', {
  //         statusCode: 200,
  //         body: mockPokemon2,
  //       }).as('mockPokemon2');
  //     });
  //   });
  //   it('A pokebola é renderiza corretamente e pode ser clicada', () => {
  //     cy.get('[data-cy=otherPokemon-btn]').click();
  //     cy.get('[data-cy=pokemon-name]').contains('Aldair o José');
  //   });
  // });
});

export { };
