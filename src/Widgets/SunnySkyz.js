import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function SunnySkyz(props) {

    const [post, setPost] = useState();
    
    const goodUrl = 'util/loadRSS.php?url=https://feeds.feedburner.com/SunnySkyz';
    useEffect(() => {
        
        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log("sunny skies",dat)
            let tempArr = [];
            dat.forEach(function(item){
                console.log(item)
                let thisArr = {
                    title: item.title,
                    link: item.link,
                    enclosure: {
                        link: item.imageUrl
                    },
                    description: item.description
                };
                tempArr.push(thisArr);
            })
            console.log("foxgoodtempArr", tempArr)
            setPost(tempArr)
        }).catch(e=>console.log(e));
      }, []);

    return (
        <div className="portlet card widget_good">
            <header className="card-header">
            <h2>SunnySkyz widget</h2>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={1} />
       
            </div>
        </div>
    )
}
export default SunnySkyz;