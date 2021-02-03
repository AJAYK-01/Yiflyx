import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Image from 'next/image';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { useRouter } from 'next/router';
import { server } from '../config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ResultCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const router = useRouter();

  const { poster, title, id, year, type } = props;

  const container = {
      margin: '16px', 
      flex: 'display', 
      flexDirection: 'row', 
      width: '160px',
      height: '305px',
      cursor: 'pointer',
      justifyContent: 'center',
      backgroundColor: '#ffffff28',
      borderRadius: '8px'
  }

  const text = {
    color: 'white', 
    fontWeight: '500',
    paddingLeft: '5px',
    paddingRight: '5px'
  }

  return (
    <span title={`${server}/details/${type}/${id}`}>
      <div style={container} 
        onClick={()=>router.push(`/details/${type}/${id}`)}  >
          <Image 
              src={poster}
              alt={(<div style={{color: 'red'}} />)}
              height={210}
              width={160}
          />
          <p style={text} >{title+' ('+year+')'}</p>

      </div>
    </span>
    // <div style={{margin: '10px'}}>
    //     <Card onClick={()=>router.push(`/details/${id}`)} className={classes.root}>
    //     <CardMedia
    //         className={classes.cover}
    //         image={poster}
    //         // title={title}
    //     />
    //     <div className={classes.details}>
    //         <CardContent className={classes.content}>
    //         <Typography component="h5" variant="h5">
    //             {title}
    //         </Typography>
    //         <Typography variant="subtitle1" color="textSecondary">
    //             {year}
    //         </Typography>
    //         </CardContent>
    //         {/* <div className={classes.controls}>
    //         <IconButton aria-label="previous">
    //             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
    //         </IconButton>
    //         <IconButton aria-label="play/pause">
    //             <PlayArrowIcon className={classes.playIcon} />
    //         </IconButton>
    //         <IconButton aria-label="next">
    //             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
    //         </IconButton>
    //         </div> */}
    //     </div>
    //     </Card>
    // </div>
  );
}