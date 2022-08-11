import React, { useState, useEffect } from 'react';


function GodTube() {

    const [post, setPost] = useState();
    const [path, setPath] = useState("Popular");


    const paths = [
        {name: 'Popular', path: ''},
        {name: 'Comedy', path: 'comedy-videos/'},
        {name: 'Ministry', path: 'ministry-videos/'},
        {name: 'Cute', path: 'cute-videos/'},
        {name: 'Movies', path: 'movies/'},
        {name: 'Inspirational', path: 'inspirational-videos/'},
        {name: 'Music', path: 'music-videos/'}
        
    ]

   
 
    
    useEffect(() => {
   
        
        let thisPath = paths.filter(t=>t.name==path)[0].path
        const goodUrl = "/util/godtube_scrape.php?path=" + thisPath;
        console.log(thisPath, goodUrl)
        
        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log(dat)
            setPost(dat.data)
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
            <div className="flex" style={{"display": "flex", "overflow": "auto"}}>
            {post && post.map(p=>{

                return(
                <div key={p.link} className="card p-2 col-sm-3">
                        <a href={p.link} target="_blank">
                            <span className='featuredImage'>
                                <img src={p.image} />
                            </span>
                            
                            <span>{p.title}</span>
                        </a>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default GodTube;