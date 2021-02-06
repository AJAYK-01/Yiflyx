const { getCast } = require('imdb-scrapper');

export default (req,res) => {

    const {
        query: slug,
      } = req;
  
    const id = slug.id;

    const funs = [ getCast(`${id}`, 14)];

    Promise.all(funs).then(data => {
        const results = data[0]['cast'];
        res.json( { cast: results} );
    })
}
