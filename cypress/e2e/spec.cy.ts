/* eslint-disable no-undef */

describe('Testes dos elementos presentes no Header', () => {
  beforeEach(() => {
    // cy.fixture('mockList').then((mockList) => {
    //   cy.intercept('GET', '**pokemon', {
    //     statusCode: 200,
    //     body: mockList,
    //   }).as('mockList');
    // });
    cy.viewport('macbook-15');
    cy.visit('http://localhost:3000/');
    // cy.visit('https://pokemon-monocard.vercel.app/');
  });
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
  // it('passes23', () => {
  //   cy.get('li').contains('pikaju');
  // });
  // it('passes23', () => {
  //   cy.fixture('mockPokemon').then((mockPokemon) => {
  //     cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/**', {
  //       statusCode: 200,
  //       body: mockPokemon,
  //     }).as('mockPokemon');
  //   });
  //   cy.get('[data-cy=but]').click();
  // });
  it('A pokebola renderiza corretamente e ', () => {
    cy.get('[data-cy=pokeball]').click();
  });
});

export {};
