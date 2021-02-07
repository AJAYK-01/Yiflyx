const { getCast } = require('imdb-scrapper');

export default (req,res) => {

    const {
        query: slug,
      } = req;
  
    const id = slug.id;

    try{

        const funs = [ getCast(`${id}`)];

        Promise.all(funs).then(data => {
            const results = data[0]['cast'];
            res.json( { cast: results} );
        })
    }
    catch(e) {
        console.log('line 21 '+e)
        res.json({ cast: [] })
    }
}
