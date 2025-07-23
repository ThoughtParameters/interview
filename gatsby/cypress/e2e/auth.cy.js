describe('Authentication Flow', () => {
  it('should allow a user to log in and see their profile', () => {
    // Start at the home page
    cy.visit('/');

    // Navigate to the login page
    cy.contains('Login').click();
    cy.url().should('include', '/login');

    // Enter credentials and submit
    // Note: These credentials need to exist in your Supabase project
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password');
    cy.get('button[type="submit"]').click();

    // Assert that the user is redirected to the profile page
    cy.url().should('include', '/profile');
    cy.contains('Your Profile').should('be.visible');
    cy.contains('Welcome, test@example.com').should('be.visible');
  });
});
