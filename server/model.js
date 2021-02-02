function getDetails(id, details) {
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
        return (params);
    }
    catch (e) {
        console.log('fuk'+e);
        return('error');
        // res.redirect(301, '/notfound');
        // res.status(404).render('https://imdb.com/');
    }
    
}

function getResults(results) {
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
    return(data);
    // return app.render(req, res, '/search', result);
}

module.exports = {
    getDetails: getDetails,
    getResults: getResults
}