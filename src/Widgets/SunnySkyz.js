import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function SunnySkyz(props) {

    const [post, setPost] = useState();
    
    let max = 6;
    const goodUrl = 'util/loadRSS.php?url=https://feeds.feedburner.com/SunnySkyz';
    useEffect(() => {
        
        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{

            let tempArr = [];
            let counter = 0;
            dat.forEach(function(item){
                

                let description = item.description;
                // extract image from description
                let regex = /<img.*?src="(.*?)"/;
                let imageUrl = regex.exec(description);
                if(imageUrl){
                    imageUrl = imageUrl[1];
                }
                // remove image from description
                //description = description.replace(/<img.*?src="(.*?)"/, "");
                item.description = "";
                let thisArr = {
                    title: item.title.replace(/#039;/g, "'"),
                    link: item.guid,
                    enclosure: {
                        link: imageUrl
                    },
                    description: item.description
                };
                if(counter < max){
                    counter++;
                    tempArr.push(thisArr);
                }
                
            })

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