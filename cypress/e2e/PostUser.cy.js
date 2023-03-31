/// <reference types="cypress" />

describe('test api post user gorest', () => {

    let accessToken = '803b28451962a1f65264171a2385d2f37c8090951aaa7608333d1dbc2e0866c1'
    let randomText = ""
    let testEmail = ""

    it('post user', ( )=> {

        var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        for (var i = 0; i <10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

        cy.fixture('createuser').then((payload) =>{

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                'authorization' : "Bearer " + accessToken
              },
            body : {
                "name": payload.name,
                "email": testEmail,
                "gender": payload.gender,
                "status": payload.status
            }
        })
        .then((res) =>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data).to.have.property("name", payload.name)
            expect(res.body.data).to.have.property("email", testEmail)
            expect(res.body.data).to.have.property("gender", payload.gender)
            expect(res.body.data).to.have.property( "status", payload.status)
        })
    })

})

})