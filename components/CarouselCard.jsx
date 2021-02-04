import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { server } from '../config';

// import './zoom.css';

export default function CarouselCard(props) {

  const router = useRouter();

  const { poster, title, id, year, type } = props;

  const container = {
      margin: 'auto', 
      flex: 'display', 
      flexDirection: 'row', 
      width: '110px',
      height: '155px',
      cursor: 'pointer',
      justifyContent: 'center',
      backgroundColor: '#ffffff28',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '-6px 6px 45px #00000050'
  }

  return (
    <span title={`${server}/details/${type}/${id}`}>
      <div style={container}
        onClick={()=>router.push(`/details/${type}/${id}`)}  >
          <Image 
              src={poster}
              alt={(<div style={{color: 'red'}} />)}
              height={155}
              width={110}
              objectFit='cover'
          />

      </div>
    </span>
  );
}