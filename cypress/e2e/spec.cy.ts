/* eslint-disable no-undef */

describe('Testes dos elementos presentes no Header', () => {
  before(() => {
    // cy.fixture('mockList').then((mockList) => {
    //   cy.intercept('GET', '**pokemon', {
    //     statusCode: 200,
    //     body: mockList,
    //   }).as('mockList');
    // });
    cy.visit('http://localhost:3000/');
  });
  it('Todos os elementos são renderizados corretamente', () => {
    cy.get('[data-cy=pokemon-logo]');
    cy.get('[data-cy=monocard-logo]');
  });
  it('Todos os elementos são renderizados corretamente', () => {
    cy.get('[data-cy=pokemon-logo]');
    cy.get('[data-cy=monocard-logo]');
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
});

export {};
