const express = require('express');
const next = require('next');

const JustWatch = require('justwatch-api');
const axios = require('axios');
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

let jw = new JustWatch({ locale: 'en_IN' });

app.prepare()
.then(() => {
  const server = express()

  server.get('/trending', (req,res) => {

    axios('https://apis.justwatch.com/content/titles/en_IN/popular?body={"page_size":'+35+',"page":1,"query":"'+null+'","content_types":["'+'movie'+'"]}')
    .then(results => {

      var items = [];
      // console.log(results.data['items']);

      results.data['items'].forEach(details => {
        let title = details['title'];
        let id = details['id'];
        let type = details['object_type'];
          
        var picId;
        if(details['poster']) {
            picId = details['poster'].split("/")[2];
        }
        else {
            picId = '9634649';
        }
        let poster = 'https://images.justwatch.com/poster'+'/'+picId+'/s166';
        let year = details['original_release_year'];

        const params = { id: id, title: title, poster: poster, year: year, type: type };
        items.push(params);
      
      });
        let data = {items: items};
        res.json(data);
        // return app.render(req, res, '/trending', results.data);
    })
  
  })

  server.get('/s/:term', (req,res) => {

    const term = req.params.term;
    jw.search( { query: term } ).then( results => {
        // let results = res['items'];
      var items = [];

      results['items'].forEach(details => {
        let title = details['title'];
        let id = details['id'];
        let type = details['object_type'];
          
        var picId;
        if(details['poster']) {
            picId = details['poster'].split("/")[2];
        }
        else {
            picId = '00';
        }
        let poster = 'https://images.justwatch.com/poster'+'/'+picId+'/s166';
        let year = details['original_release_year'];

        const params = { id: id, title: title, poster: poster, year: year, type: type };
        items.push(params);
      
      });
        let data = {items: items};
        res.json(data)
        // return app.render(req, res, '/search', result);
    })
  })
    
  server.get('/d/:type/:id', (req, res) => {

    const id = req.params.id;
    const type = req.params.type;
    jw.getTitle(type , id).then( details => {
      try{
        let title = details['title'];
        
        var picId;
        if(details['poster']) {
          picId = details['poster'].split("/")[2];
        }
        else {
            picId = '9634649';
        }
        let poster = 'https://images.justwatch.com/poster'+'/'+picId+'/s166';
        let desc = details['short_description'];
        let year = details['original_release_year'];

        var streams = [];
        let links = [];
        try{
          streams = details['offers'];
          let uids = [];
  
         
          streams.forEach((stream) => {
            let uid = stream['provider_id'];
  
            if(!(uids.includes(uid))) {
              let url = stream['urls']['standard_web'];
              links.push({id: uid, url: url});
              uids.push(uid);
            }
          })
        }
        catch (e) {
          console.log('line 120'+e);
        }

        var trailer = ''
        try{
          trailer = `https://youtu.be/${details['clips'][0]['external_id']}`
        }
        catch (e){
          console.log('line 121'+e);
        }

        const params = { 
          id: id, 
          title: title, 
          poster: poster, 
          desc: desc, 
          year: year,
          links: links,
          trailer: trailer
        };

        res.json(params);
        // return app.render(req, res, '/details', params);
      }
      catch (e) {
        console.log('fuk');
        // res.redirect(301, '/notfound');
        res.status(404).render('https://imdb.com/');
      }
    })

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