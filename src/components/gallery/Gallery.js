import React from 'react'
import Slideshow from '../slideshow';

const items = [
   '/images/_MG_1720.jpg'
];

export default class Gallery extends React.Component {
    render() {
        var client = new XMLHttpRequest();
        client.open('GET', 'list.txt');
        client.onloadend = function() {
            // alert(client.responseText);
            var lines = client.responseText.split('\n');
            for(var line = 0; line < lines.length; line++){
                if (lines[line].length !== 0)
                items.push(lines[line]);
            }
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
        client.send();

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
