import React from 'react';
// import Image from 'next/image';

import { useRouter } from 'next/router';
import { server } from '../config';


export default function ResultCard(props) {

  const router = useRouter();

  const { poster, title, id, year, type } = props;

  const container = {
      margin: '16px', 
      width: '186px',
      height: '310px',
      cursor: 'pointer',
      justifyContent: 'center',
      backgroundColor: '#ffffff28',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '6px 6px 8px #00000050'
  }

  const text = {
    color: 'white', 
    fontWeight: '500',
    fontSize: '14px',
    fontFamily: 'poppins',
    paddingLeft: '5px',
    paddingRight: '5px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  const subtext = {
    color: 'white', 
    fontWeight: '400',
    fontSize: '12px',
    paddingLeft: '5px',
    paddingRight: '5px'
  }

  return (
    <span title={`${server}/details/${type}/${id}`}>
      <div style={container} className='grow'
        onClick={()=>router.push(`/details/${type}/${id}`)}  >
          <img 
              src={poster}
              alt={''}
              height={250}
              width={186}
              objectFit='cover'
          />
          <div style={text} >{title}</div>
          <div style={subtext} >{`(${year})`}</div>

      </div>
    </span>
  );
}