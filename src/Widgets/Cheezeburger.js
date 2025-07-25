

import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function Cheezeburger(props) {

    const [post, setPost] = useState();
    let urlformat = "https://www.cheezburger.com/rss";
    const cheezeburgerUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + urlformat;

    useEffect(() => {

        fetch(cheezeburgerUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log("cheezeburger data", dat);
            let tempArr = [];
            dat.items.forEach(function(item){
        
                let thisArr = {
                    title: item.title,
                    link: item.url,
                    enclosure: {
                        link: item.thumbnail
                    },
                    description: item.description
                };
                tempArr.push(thisArr);
            })
          
            setPost(tempArr)
        });
      }, []);

    return (
        <div className="portlet card widget_good">
            <header className="card-header">
            <h2>Cheezeburger widget</h2>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={3} />
       
            </div>
        </div>
    )
}
export default Cheezeburger;
