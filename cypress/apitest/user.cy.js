/// <reference types ="cypress" />

describe('test api user gorest1', () => {
  
  let accessToken = '803b28451962a1f65264171a2385d2f37c8090951aaa7608333d1dbc2e0866c1'
  
  it('ger users', () => {
    cy.request({
      method : 'GET',
      url : 'https://gorest.co.in/public-api/users',
      headers : {
        'authorization' : "Bearer " + accessToken
      }
    })
    .then((res) =>{
        expect(res.status).to.eq(200)
        expect(res.body.meta.pagination.limit).to.eq(10)
    })
  })

  it('ger users id', () => {
    cy.request({
      method : 'GET',
      url : 'https://gorest.co.in/public-api/users/2',
      headers : {
        'authorization' : "Bearer " + accessToken
      }
    })
    .then((res) =>{
        expect(res.status).to.eq(200)
        expect(res.body.data.message).to.eq("Resource not found")
    })
  })




})