describe("PrivateRoute Component", () => {
    it("should redirect to the login page when not authenticated", () => {
      cy.visit("http://localhost:3000/home");
  
      cy.url().should("include", "/");
    });
  
    it("should allow access to protected routes when authenticated", () => {
      cy.window().then((win) => {
        win.localStorage.setItem("login", JSON.stringify({ email: "foo", password: "bar" }));
      });
  
      cy.visit("http://localhost:3000/home");
  
      cy.url().should("include", "/home");
    });
  });


  
  