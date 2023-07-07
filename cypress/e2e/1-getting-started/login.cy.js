describe('Basic Auth in Cypress', () => {

    // it('Ввод корректных учетных данных', async function () {
    //     cy.visit("https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/", {
    //         headers: {
    //             authorization: 'Basic ZmFicmlxdWU6ZmFicmlxdWU='
    //         },
    //         failOnStatusCode: false
    //     });
    //     cy.contains('Вход в систему').should('be.visible')
    //     cy.get('[placeholder="Электронная почта"]').type("admin@admin.ad")
    //     cy.get('[placeholder="Пароль"]').type("admin")
    //     cy.get('.button__content').click()
    //
    //     cy.url().should('include', 'https://finance.dev.fabrique.studio')
    //     cy.contains('Платежи')
    //
    // })

    // it('Ввод некорректных учетных данных', async () => {
    //     cy.visit("https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/", {
    //         headers: {
    //             authorization: 'Basic ZmFicmlxdWU6ZmFicmlxdWU='
    //         },
    //         failOnStatusCode: false
    //     });
    //     cy.contains('Вход в систему').should('be.visible')
    //     cy.get('[placeholder="Электронная почта"]').type("invaliduser@example.com")
    //     cy.get('[placeholder="Пароль"]').type("incorrectpassword")
    //     cy.get('.button__content').click();
    //
    //     cy.contains('Невозможно войти с предоставленными учетными данными.').should('be.visible');
    // });

    it('Successfully create a payment', () => {

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
        
        cy.contains('Добавить платёж').click();
        cy.wait(3000)



        // Fill in the payment details
        cy.get('.checkbox__icon--checked').click();
        cy.get('div:nth-child(2) > div > div > div > .form-field .input__input').type('1000');
        cy.get('div:nth-child(5) .input__input:nth-child(1)').type('1000');

        // cy.get('.date__input:nth-child(1)').type('2023-07-06');
        // cy.get('.date__input:nth-child(2)').type('2023-07-06');


        cy.get('.date__input').click();




        cy.get('#id26xnv').submit();

        // Check if the payment was successfully created
        cy.contains('Платеж успешно создан').should('be.visible');
    });


    // it('Создание нового платежа', function () {
    //     cy.get('@accessToken').then(accessToken => {
    //         cy.request({
    //             method: 'GET',
    //             url: 'https://fabrique:fabrique@finance.dev.fabrique.studio/',
    //             headers: {
    //                 Authorization: `JWT ${accessToken}`
    //             }
    //         }).then((response) => {
    //             // Perform assertions on the response
    //             expect(response.status).to.equal(200);
    //         });
    //     })
    // });

});

