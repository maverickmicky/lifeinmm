import React from 'react'
import Slideshow from '../slideshow';

const items = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
];

export default class Gallery extends React.Component {
    render() {
        // var finder = require('findit')(process.argv[2] || '.');
        // var path = require('path');
        //
        // finder.on('directory', function (dir, stat, stop) {
        //     var base = path.basename(dir);
        //     if (base === '.git' || base === 'node_modules') stop()
        //     else console.log(dir + '/')
        // });
        //
        // finder.on('file', function (file, stat) {
        //     console.log(file);
        // });
        //
        // finder.on('link', function (link, stat) {
        //     console.log(link);
        // });

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
