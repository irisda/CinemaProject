const CrawlE = require("crawl-e/v0.1.1");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "DAS KINO",
      address: "Giselakai 11, A-5020 Salzburg",
      website: "http://www.daskino.at/",
      telephone: "0662-87 31 00"
    }
  ],
  showtimes: {
    url: "http://www.daskino.at/programm_:date:",
    urlDateFormat: "D_M_YYYY",
    movies: {
      box: "#content .std tr",
      title: ".titel",
      showtimes: {
        box: ".zeit",
        timeFormat: "HH:mm"
      }
    }
  }
});

crawlE.crawl();
