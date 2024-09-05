import React, { useState, useEffect } from 'react';
import Good from "../Widgets/Good";
import Autoevolution from "../Widgets/Autoevolution";
import GodTube from "../Widgets/GodTube";
import FoxGood from "../Widgets/FoxGood";
import SunnySkyz from '../Widgets/SunnySkyz';

import BibleVOD from '../Widgets/BibleVOD';

import ThingsToBeHappyAbout from '../Widgets/ThingsToBeHappyAbout';
//import MovableItem from "../Components/MovableItem";
import SwiperComponent from '../Widgets/Swiper';

import MovableItem from "../Components/MovableItem"
import Column from "../Components/Column";

function Happy() {

    const widgets = {
        GOOD: <Good />,
        GODTUBE: <GodTube />,
        FOXGOOD: <FoxGood />
    }
    let layoutInit = [
        {title: 'Row1', widgets: [ 
            "GOOD", "GODTUBE"
        ]},
        {title: 'Row2', widgets: ["AUTOEVOLUTION"]},
        {title: 'Row3', widgets: ['FOXGOOD']}
    ]
    const [layout, setLayout] = useState(layoutInit);

    const Item = <MovableItem setIsFirstColumn={false} title="GOOD" />;
    

    useEffect(() => {
        console.log('trigger happy effect hook');

      }, [layoutInit, layout])

    console.log("layout", layout)
    return (
        <>


            <div className="wrapper mt-4 container">

           
           

    

            <div className="row">
                <div className='col-sm-12'>
                    <GodTube />
                </div>  
                <div className='col-sm-6'>
                    <BibleVOD />
                </div>
                <div className="col-sm-6">
                    <Good />
                </div>

                <div className='col-sm-12'>
                    <ThingsToBeHappyAbout />
                </div>
                

                <div className="col-sm-6">
                <FoxGood />
                </div>
                <div className="col-sm-6">
                <SunnySkyz />
                </div>
                
               
            </div>
            
            
            </div>
        </>
    );

}
export default Happy;