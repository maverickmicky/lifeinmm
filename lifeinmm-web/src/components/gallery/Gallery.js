import React from 'react'
import Slideshow from '../slideshow';

const items = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
];

export default class Gallery extends React.Component {
    render() {
        return <Slideshow
            showIndex={false}
            showArrows={false}
            autoplay={true}
            defaultIndex={1}
            effect={'fade'}
            slideInterval={4000}
            slides={items}
            height={'100%'}
            width={'100%'}>
        </Slideshow>;
    }
}
