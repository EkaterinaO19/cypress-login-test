describe('E2E test', () => {

    it('Ввод корректных учетных данных', async function () {
        cy.visit("https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/", {
            headers: {
                authorization: 'Basic ZmFicmlxdWU6ZmFicmlxdWU='
            },
            failOnStatusCode: false
        });
        cy.contains('Вход в систему').should('be.visible')
        cy.get('[placeholder="Электронная почта"]').type("admin@admin.ad")
        cy.get('[placeholder="Пароль"]').type("admin")
        cy.get('.button__content').click()

        cy.url().should('include', 'https://finance.dev.fabrique.studio')
        cy.contains('Платежи')

    })

    it('Ввод некорректных учетных данных', async () => {
        cy.visit("https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/", {
            headers: {
                authorization: 'Basic ZmFicmlxdWU6ZmFicmlxdWU='
            },
            failOnStatusCode: false
        });
        cy.contains('Вход в систему').should('be.visible')
        cy.get('[placeholder="Электронная почта"]').type("invaliduser@example.com")
        cy.get('[placeholder="Пароль"]').type("incorrectpassword")
        cy.get('.button__content').click();

        cy.contains('Невозможно войти с предоставленными учетными данными.').should('be.visible');
    });

});

