import React from 'react';

export default function CarouselArrow({ onClick, ...rest }) {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
        <button style={{height: '100px', width: '100px', color: 'black'}} onClick={() => onClick()} />
    );
  }