import axios from 'axios';

const JustWatch = require('justwatch-api');
const { getResults } = require('../../server/model');

let jw = new JustWatch({ locale: 'en_IN' });

export default (req,res) => {

    axios('https://apis.justwatch.com/content/titles/en_US/popular?body={"page_size":'+35+',"page":1,"query":"'+null+'","content_types":["'+'movie'+'"]}')
    .then(results => {

        let movies = getResults(results.data);
        axios('https://apis.justwatch.com/content/titles/en_US/popular?body={"page_size":'+35+',"page":1,"query":"'+null+'","content_types":["'+'show'+'"]}')
        .then(showRes => {
            let shows = getResults(showRes.data);

            axios('https://apis.justwatch.com/content/titles/en_US/new?body={"page_size":'+1+',"page":1,"query":"'+null+'","content_types":["'+'movie'+'"]}')
            .then(trends => {

              let trending = getResults(trends.data['days'][0]['providers'][0]);

              let data = {'movies': movies['items'], 'shows': shows['items'], trending: trending['items']};
      
              res.json(data);
            });
        });
    });
}