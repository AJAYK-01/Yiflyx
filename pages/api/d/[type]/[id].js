const JustWatch = require('justwatch-api');
const { getDetails } = require('../../../../server/model');

let jw = new JustWatch({ locale: 'en_IN' });

export default (req,res) => {

    const {
        query: slug,
      } = req;

    const id = slug.id;
    const type = slug.type;


    jw.getTitle(type, id).then( details => {
      
        let params = getDetails(id, details);

        if(params === 'error') {
          res.status(404).render('https://imdb.com/');
        }
        else{
          res.json(params);
        }
    });
}