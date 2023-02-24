export class OAuthUtil {
    makeOAuthRequest() {
        debugger
        cy.readFile('cypress/fixtures/local.json').then((local_res) => {
            let token = JSON.parse(local_res.credentials)
            debugger
            cy.getAccessToken(token.clientId, token.clientSecret).then(() => {
                cy.get('@accessTokenResponse').then((token_res) => {
                    expect(token_res.status).to.be.equal(200)
                    return token_res.body.access_token

                })
            })
        })
    }
}