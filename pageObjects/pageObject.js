module.exports = {
    url: 'https://www.logitechg.com/en-us',

    elements: {
        loaded: 'a[class="main-nav-logo js-main-nav-logo"]',
        menu: 'button#menu',
        searchBtn: 'button[class="icon-search js-search-btn"]',
        searchBar: 'input[id="searchInput"]',
        support: {
            selector: '(//a[@href="http://support.logitech.com/"])[2]',
            locateStrategy: 'xpath'
        },
        supportLoad: 'div[id="bannerImageDIV"]',
        results: 'div[class="grid"]',
        downloads: 'a[href="/downloads"]',
        software: 'div[class="row"]',
        firstItem: {
            selector: '(//div[@class="search-result-product js-search-result hide-initial"])[2]',
            locateStrategy: 'xpath'
        },
        addToCart: {
            selector: '(//a[@class="btn-add-to-cart js-add-to-cart"])[2]',
            locateStrategy: 'xpath'
        },
        addToCart2: 'a[class="btn-add-to-cart js-add-to-cart"]',
        buyNow: {
            selector: '(//a[@class="btn-large buy-now js-trigger-buy-modal"])[2]',
            locateStrategy: 'xpath'
        },
        dropDown: 'select[class="js-product-model-selector"] option[value="gaming:product-catalog/variant-axes/style/tactile"]',
        cart: 'span[class="total-items"]',
        quantity: {
            selector: '//span[@class="total-items"]',
            locateStrategy: 'xpath'
        }


    },
}