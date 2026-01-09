describe('Layout one - Basic UI test', () => {
  beforeEach(function(){
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Loads the homepage successfully', () => {
    cy.contains('Your Website to practice Automation Testing').should('be.visible')
  })
  it('clicks cancel on the confirm popup', () => {
    cy.on("window:confirm", (text) => {
      expect(text).to.equal("Press a button!")
      return false
    })
    cy.get('.pop-up-alert > button').click()
    cy.contains('You pressed the Cancel Button!').should('be.visible')
  })
  it('clicks ok on the confirm popup', () => {
    cy.on("window:confirm", (text) => {
      expect(text).to.equal("Press a button!")
      return true
    })
    cy.get('.pop-up-alert > button').click()
    cy.contains('You Pressed the OK Button!').should('be.visible')
  })

  it('clicks the double click button and drag image into the box', () => {
    cy.get('[ondblclick="myFunction()"]').dblclick();
    cy.contains('Your Sample Double Click worked!').should('exist')
    
    cy.get('#drag1').drag('#div1')
  })
  it('logins with valid credentials', () => {
    cy.get('[name="uname"]').type('test')
    cy.get('[name="pwd"]').type('test')
    cy.get('[type="submit"]').click()
    cy.contains('Login Successful').should('be.visible')
  })
  it('logins with invalid credentials', () => {
    cy.get('[name="uname"]').type('est')
    cy.get('[name="pwd"]').type('tes')
    cy.get('[type="submit"]').click()
    cy.contains('Login Successful').should('be.visible')
  })

})