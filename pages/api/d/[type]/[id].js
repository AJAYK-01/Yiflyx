import axios from 'axios';
import { server } from '../../../../config';

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
          let imdb = params['imdb'];
          axios.get(`${server}/imdb/${imdb}`).then((response) => {
              const cast = response.data['cast'];
              params['imdb'] = {id: imdb, cast: cast};
              res.json(params);
          }).catch((e) => {
              const cast = [];
              params['imdb'] = {id: imdb, cast: cast};
              res.json(params);
          })
        }
    });
}