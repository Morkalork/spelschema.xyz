const request = require('request-promise');
const cheerio = require('cheerio');

const parser = (url, xmlMode = false) => {
    return new Promise((resolve, reject) => {
        request(url)
            .then((html) => {
                const $ = cheerio.load(html, {xmlMode});
                resolve($);
            })
            .catch((err) => {
                console.error('FAILED TO FETCH DATA: ', err);
                resolve([]);
            });
    });
};

module.exports = parser;