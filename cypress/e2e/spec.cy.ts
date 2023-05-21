
describe("Login Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the login form correctly", () => {
    cy.contains("h1", "Login Form").should("be.visible");
    cy.get("input[name='email']").should("be.visible");
    cy.get("input[name='password']").should("be.visible");
    cy.contains("Login").should("be.visible");
  });

  it("should login with valid credentials", () => {
    const email = "foo";
    const password = "bar";

    cy.get("input[name='email']").type(email);
    cy.get("input[name='password']").type(password);
    cy.get("button").click();

    cy.visit("http://localhost:3000/home");
  });



  it("should show an alert with invalid credentials", () => {
    const invalidEmail = "invalid@example.com";
    const invalidPassword = "invalid";

    cy.get("input[name='email']").type(invalidEmail);
    cy.get("input[name='password']").type(invalidPassword);
    cy.contains("Login").click();

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Invalid email/Password");
    });
  });

  
});
