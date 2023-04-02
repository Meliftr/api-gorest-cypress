/// <reference types="cypress" />

describe('api interception with cypress', ()=> {

    it('testing api interception simple', ()=> {
        
        cy.visit('https://jsonplaceholder.typicode.com/')
        
        cy.intercept({
            path : '/posts'

        }).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)

        })



    })


    it('mocking with intercept test with static response', ()=> {

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {totalpost:5 , name: 'naveen'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })

    it('mocking with intercept test with dynamic fixture', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {fixture: 'createuser.json'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })




})