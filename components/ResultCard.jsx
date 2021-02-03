import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { server } from '../config';

// import './zoom.css';

export default function ResultCard(props) {

  const router = useRouter();

  const { poster, title, id, year, type } = props;

  const container = {
      margin: '16px', 
      flex: 'display', 
      flexDirection: 'row', 
      width: '186px',
      height: '310px',
      cursor: 'pointer',
      justifyContent: 'center',
      backgroundColor: '#ffffff28',
      borderRadius: '6px',
  }

  const text = {
    color: 'white', 
    fontWeight: '500',
    fontSize: '15px',
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
          <Image 
              src={poster}
              alt={(<div style={{color: 'red'}} />)}
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