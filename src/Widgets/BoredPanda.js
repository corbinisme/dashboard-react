

import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';
import getTheImage from '../lib/getTheImage';

function BoredPanda(props) {

    const [dataLength, setDataLength] = useState(0);
    const [post, setPost] = useState();
    let urlformat = "https://www.boredpanda.com/feed/";
    const boredPandaUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + urlformat;

    useEffect(() => {

        fetch(boredPandaUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log("boredPanda data", dat);
            let tempArr = [];
            setDataLength(dat.items.length);
            dat.items.forEach(function(item){
        
                const  fullUrl = "util/proxy.php?url=" + item.link
                console.log("Fetching image for URL:", fullUrl);
                fetch(fullUrl).then(response => response.text())
                .then(html => {
                    let imageUrl ="";
                    let regex = /<meta property="og:image" content="(.*?)"/;    
                    let match = regex.exec(html);
                    if (match && match[1]) {
                        console.log("Image URL found:", match[1]);
                        imageUrl = match[1];
                    }
                    let thisArr = {
                    title: item.title,
                    link: item.url,
                    enclosure: {
                        link: imageUrl
                    },
                    description: item.description
                };
                tempArr.push(thisArr);
                console.log("Processed item:", thisArr);
                setDataLength(tempArr.length);
                });

                
            })
          
            
            setPost(tempArr)
        });
      }, []);

    return (
        <div className="portlet card widget_good">
            <header className="card-header">
            <h2>BoredPanda widget</h2>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={3} />
       
            </div>
        </div>
    )
}
export default BoredPanda;
