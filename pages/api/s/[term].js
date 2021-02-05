const JustWatch = require('justwatch-api');
const { getResults } = require('../../../server/model');

let jw = new JustWatch({ locale: 'en_IN' });

export default (req,res) => {

    const {
      query: slug,
    } = req;

    const term = slug.term;
    
    jw.search( { query: term } ).then( results => {

      let data = getResults(results);
      res.json(data);
    })
  }