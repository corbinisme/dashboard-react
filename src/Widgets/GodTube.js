import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function GodTube() {

    const [post, setPost] = useState();
    const [path, setPath] = useState("Popular");


    const paths = [
        {name: 'Popular', path: 'most-popular'},
        {name: 'Cute', path: 'cute-videos'},
        {name: 'Inspirational', path: 'inspirational-videos'},
        {name: 'Music', path: 'music-videos'}
        
    ]

   
 
    
    useEffect(() => {
   
        
        let thisPath = paths.filter(t=>t.name==path)[0].path
        const goodUrl = `util/proxy.php?url=https://www.godtube.com/media/sort/?categoryUrl=${thisPath}&sort=MostPopular&time=Today&page=1&size=15`;
        //const goodUrl = "util/godtube_scrape.php?path=" + thisPath;
        console.log("loading this",thisPath, goodUrl)
        
        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log("godtube", dat, dat.data);
            let tempArr = [];
            dat.data.forEach(function(item){

                let thisArr = {
                    title: item.name,
                    link: item.siteUrl,
                    enclosure: {
                        link: item.mediaPreviewUrl
                    },
                    description: item.description
                };
                tempArr.push(thisArr);
            })
            setPost(tempArr)
        });
         
      }, [path]);
    
      const pathChange= function(thisPath){
        console.log(thisPath)
        setPath(thisPath)
      }

    return (
        <div className="portlet card">
            <header className="card-header">
                <div className="row">
                    <div className="col">
                        <h2>GodTube {path}</h2>
                    </div>
                    <div className="col text-right align-right" style={{textAlign: "right"}}>
                        <div className="btn-group">
                            {paths.map(p=>{

                                let activeClass = (p.name == path? "active": "");
                                return(
                                    <button className={`btn btn-secondary ${activeClass}`} onClick={()=>pathChange(p.name)} key={p.name}>
                                        {p.name}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
               
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={2} />
       
            </div>
        </div>
        
    )
}
export default GodTube;