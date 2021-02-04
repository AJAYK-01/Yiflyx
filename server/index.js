const express = require('express');
const next = require('next');

const JustWatch = require('justwatch-api');
const axios = require('axios');

const { getDetails, getResults, getForCarousel } = require('./model');
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

let jw = new JustWatch({ locale: 'en_IN' });

app.prepare()
.then(() => {
  const server = express()

  server.get('/trending', (req,res) => {

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
              // data.push(shows['items'])
              // console.log(data);
              // let carousel = getForCarousel(data);
      
              res.json(data);
            });
        });
        // return app.render(req, res, '/trending', results.data);
    })
  
  })

  server.get('/s/:term', (req,res) => {

    const term = req.params.term;
    jw.search( { query: term } ).then( results => {
        // let results = res['items'];
      let data = getResults(results);
      res.json(data);
    })
  })
    
  server.get('/d/:type/:id', (req, res) => {

    const id = req.params.id;
    const type = req.params.type;
    jw.getTitle(type , id).then( details => {
      
        let params = getDetails(id, details);

        if(params === 'error') {
          res.status(404).render('https://imdb.com/');
        }
        else{
          res.json(params);
        }
        // return app.render(req, res, '/details', params);
      // }
      // catch (e) {
      //   console.log('fuk');
      //   // res.redirect(301, '/notfound');
      // }
    });

  })

  server.get('*', (req, res) => {
    // console.log("hehe");
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})