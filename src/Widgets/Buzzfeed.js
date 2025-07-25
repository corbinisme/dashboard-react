

import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

const types = ['index', 'cute', 'nifty', 'lol'];
function Buzzfeed(props) {

    const [type, setType] = useState('cute');

    const [post, setPost] = useState();
    let urlformat = `https://www.buzzfeed.com/${type}.xml`;
    const buzzfeedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + urlformat;

    useEffect(() => {

        fetch(buzzfeedUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log("buzzfeed data", dat);
            let tempArr = [];
            dat.items.forEach(function(item){
        
                let thisArr = {
                    title: item.title,
                    link: item.url,
                    enclosure: {
                        link: item.imageUrl
                    },
                    description: item.description
                };
                tempArr.push(thisArr);
            })
          
            setPost(tempArr)
        });
      }, [type]);

    return (
        <div className="portlet card widget_good">
            <header className="card-header">
                <div className="row">
                    <div className="col">
                        <h2>Buzzfeed widget</h2>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <select className="form-select w-auto" value={type} onChange={(e) => setType(e.target.value)}>
                            {types.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={3} />
       
            </div>
        </div>
    )
}
export default Buzzfeed;
