const CrawlE = require('crawl-e/v0.1.1');

let crawlE = new CrawlE({
    cinemas: [
        {
            name: 'TCL Chinese Theatres',
            address: '6925 Hollywood Blvd, Hollywood, CA 90028',
            website: 'http://www.tclchinesetheatres.com',
            telephone: '+1 323 461 3331'
        }
    ],
    showtimes: {
        url: 'http://www.tclchinesetheatres.com/tickets-showtimes/?date=:date:',
        urlDateFormat: 'M/DD/YYYY',
        movies: {
            box: '.wrapper .teatro_box',
            title: '.movie_desc a h3 b',
            showtimes: {
                box: '.time .time_div',
                timeFormat: 'hh:mm A'
            }
        }
    }
});
crawlE.crawl();