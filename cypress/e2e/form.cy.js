describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3003/");
  });

  const usernameInput = () => cy.get("input[name=username]");
  const favlanguageInputJS = () => cy.get("input[value=javascript]");
  const favlanguageInputRust = () => cy.get("input[value=rust]");
  const favfoodSelect = () => cy.get("select[name=favFood]");
  const agreementInput = () => cy.get("input[name=agreement]");
  const submitInput = () => cy.get("input[type=submit]");

  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.equal(5);
    expect({}).not.to.equal({});
  });

  it("the proper elements are showing", () => {
    usernameInput().should("exist");
    favlanguageInputJS().should("exist");
    favlanguageInputRust().should("exist");
    favfoodSelect().should("exist");
    agreementInput().should("exist");
    submitInput().should("exist");

    // cy.contains("submit").should("exist");
  });
});
