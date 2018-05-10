const CrawlE = require('crawl-e/v0.1.1');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let crawlE = new CrawlE({
    cinemas: {
        list: {
            url: 'https://spotlightcinemas.com',
            box: '.dropdown-menu .dropdown-item',
            website: {
                selector: ':box',
                attribute: 'href',
                mapper: href => 'https://spotlightcinemas.com' + href
            },
            slug: {
                selector: ':box',
                attribute: 'href',
                mapper: href => href.replace('/', '')
            }
        },
        details: {
            url: ':cinema.website:/?page=contact',
            name: {
                selector: '#contact .card-block .card-text p:nth-of-type(2)',
                attribute: 'html()',
                mapper: value => value.split('<br>')[1]
            },
            address: {
                selector: '#contact .card-block .card-text p:nth-of-type(2)',
                attribute: 'html()',
                mapper: value => value.split('<br>')[2]
            }
        }
    },
    showtimes: {
        url: ':cinema.website:/index.php?date=:date:',
        urlDateFormat: 'YYYYMMDD',
        movies: {
            box: '#home .card ',
            title: '.card-title'
        }
    }
})
crawlE.crawl()