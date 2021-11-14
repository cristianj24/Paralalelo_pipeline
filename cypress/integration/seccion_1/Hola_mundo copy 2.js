describe('Bienvenido al curso de Cypress seccion 1', () => {
   it('Mi primer Test', () => {
       cy.log("Hola Mundo")
   }); 
   it('Segundo Test -> campo name', () => {
       cy.visit('https://demoqa.com/text-box');
       cy.get('#userName').type("Rodrigo");
       cy.wait(4000);
   });
});