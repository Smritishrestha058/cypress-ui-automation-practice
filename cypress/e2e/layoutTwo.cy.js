describe('Layout two - Basic Form', () => {
    beforeEach(() => {
        cy.visit("https://trytestingthis.netlify.app/")
    })
    it('should handle all form controls', () => {
        cy.contains("This is your layout two").should('be.visible')

        cy.get('[name="fname"]').type('Smriti')
        cy.get('[name="lname"]').type('Shrestha')

        cy.get('[for="female"]').click()
        
        cy.get('[name="option"]').select(['Option 2'])
        cy.get('[name="Optionwithcheck[]"]').select(['Option 1', 'Option 3'])
        cy.get('[name="option2"]').check()

        cy.get('[name="Options"]').type('Strawberry')
        cy.get('input[type="color"]')
            .invoke("val", "#AC3939")
            .trigger("change")
        cy.get('[name="day"]').type('2004-02-15')
        
        cy.get('input[type="range"]')
            .invoke("val", 70)
            .trigger("input")
            .trigger("change")
        cy.get('[name="myfile"]').attachFile('download.jpeg')
       
        cy.get('[name="quantity"]').type('4')
        cy.get('[name="message"]')
            .clear()
            .type('Smriti Shrestha')
        
        cy.get('.btn').click()
    })
})