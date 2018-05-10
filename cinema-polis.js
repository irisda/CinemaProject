const CrawlE = require('crawl-e/v0.1.1');

let crawlE = new CrawlE({
    cinemas: [
        {
            name: 'Cinemapolis',
            address: '120 E. Green Street Ithaca, New York 14850',
            website: 'https://cinemapolis.org/',
            telephone: '(607) 277-6115'
        }
    ],
    showtimes: {
        url: 'https://cinemapolis.org/showtimes/?showdate=:date:',
        urlDateFormat: 'MM/DD/YYYY',
        movies: {
            box: '.showtimes .showtime',
            title: '.showtimetitle a:first-of-type'
        }
    }
});
crawlE.crawl();