class HomePage{

    getRegisterLoginButton(){ return cy.get('a[href="/login"]') }
    getDeleteAccountButton(){return cy.get('a[href="/delete_account"]')}

}

export default HomePage