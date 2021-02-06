import React, { useEffect, useState } from 'react';

export default function CastCard(props) {

  const { poster, name, link } = props;
  const [url, setUrl] = useState(poster);

  useEffect(() => {
      fetch(poster).then((data) => {
          if(!data.ok) {
              throw new Error('error');
          }
      }).catch((e) => {
          console.log('err');
          setUrl('https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png');
      })
  }, []);

  const container = {
      margin: 'auto', 
      flex: 'display', 
      flexDirection: 'row', 
      width: '110px',
      height: '200px',
      cursor: 'pointer',
      justifyContent: 'center',
      backgroundColor: '#ffffff28',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '-6px 6px 45px #00000050'
  }

  const title = {
    fontSize: '14px',
    color: 'white',
    marginLeft: '2px'
  }

  return (
    <span title={`https://imdb.com/name/${link}`}>
      <div style={container}
        onClick={()=>window.open(`https://imdb.com/name/${link}`, '_blank')} 
         >
          <img 
              src={url}
              alt={''}
              height={155}
              width={110}
              style={{objectFit: 'cover', background: '#ffffff90'}}
          />
          <div style={title}>{name}</div>

      </div>
    </span>
  );
}