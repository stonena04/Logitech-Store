module.exports = (pageObject, product) => {
    pageObject.navigate()
    .click('@searchBtn')
    .setValue('@searchBar', product)
    .sendKeys('@searchBar', pageObject.api.Keys.ENTER)
}