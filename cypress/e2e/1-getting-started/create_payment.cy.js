describe('Basic Auth in Cypress', () => {

    it('Создание нового платежа', function () {
        cy.get('@accessToken').then(accessToken => {
            cy.request({
                method: 'GET',
                url: 'https://fabrique:fabrique@finance.dev.fabrique.studio/',
                headers: {
                    Authorization: `JWT ${accessToken}`
                }
            }).then((response) => {
                // Perform assertions on the response
                expect(response.status).to.equal(200);
            });
        })
    });
});