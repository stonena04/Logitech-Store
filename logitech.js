let logiData = require('../data/logitechData')
var searchProducts = require('../data/searchProducts')
var Logi = {}
module.exports = {
    beforeEach: browser => {
        Logi = browser.page.pageObject()
        browser.maximizeWindow()
        Logi.navigate()
            .waitForElementVisible('@loaded', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Searching for an item': () => {
        logiData.forEach(product => {
            searchProducts(Logi, product)
            Logi.expect.element('@results').text.to.contain(product).before(5000)
        })
    },

    'Adding items to the shopping cart': browser => {
        searchProducts(Logi, logiData[0])
        Logi
            .waitForElementVisible('@firstItem', 5000)
            .click('@firstItem')
            .waitForElementVisible('@addToCart', 5000)
            .click('@addToCart')
            .waitForElementVisible('@cart', 5000)
            .expect.element('@check').text.to.equal('1').after(5000)
            

        searchProducts(Logi, logiData[1])
        Logi
            .waitForElementVisible('@firstItem', 5000)
            .click('@firstItem')
            .waitForElementVisible('@addToCart', 5000)
            .click('@addToCart')
            .waitForElementVisible('@cart', 5000)
            .expect.element('@check').text.to.equal('2').after(5000)

        searchProducts(Logi, logiData[2])
        Logi
            .waitForElementVisible('@firstItem', 5000)
            .click('@firstItem')
            // .waitForElementPresent('@buyNow', 5000)
            // .click('@buyNow')
            // .click('@dropDown')
            .waitForElementVisible('@addToCart', 5000)
            .click('@addToCart')
            .waitForElementVisible('@cart',5000)
            .expect.element('@check').text.to.equal('3').after(5000)

        searchProducts(Logi, logiData[3])
        Logi
            .waitForElementVisible('@firstItem', 5000)
            .click('@firstItem')
            .waitForElementVisible('@addToCart', 5000)
            .click('@addToCart')
            .waitForElementVisible('@cart', 5000)
            .expect.element('@check').text.to.equal('4').after(5000)

        // 'Support, getting drivers': browser => {
    //     Logi
    //     .waitForElementVisible('@menu',5000)
    //     .click("@menu")
    //     .waitForElementVisible('@support',5000)
    //         .click('@support')
    //         .api.frame(1)
    //         Logi
    //         .waitForElementVisible('@supportLoad', 8000)
    //         .click('@downloads')
    // },


    },
}