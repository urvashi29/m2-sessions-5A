describe("Example Test", () => {
  it("visit the homepage", () => {
    cy.visit("/");
    cy.contains("Welcome to NextJS").should("exist");
    console.log("hello");
  });
});
