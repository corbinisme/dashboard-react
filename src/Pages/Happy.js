import React, { useState, useEffect } from 'react';
import Good from "../Widgets/Good";
import Autoevolution from "../Widgets/Autoevolution";
import GodTube from "../Widgets/GodTube";
//import MovableItem from "../Components/MovableItem";


import MovableItem from "../Components/MovableItem"
import Column from "../Components/Column";

function Happy() {

    const widgets = {
        GOOD: <Good />,
        GODTUBE: <GodTube />,
        HAPPY: <Autoevolution />
    }
    let layoutInit = [
        {title: 'Row1', widgets: [ 
            "GOOD", "GODTUBE"
        ]},
        {title: 'Row2', widgets: ["HAPPY"]},
        {title: 'Row3', widgets: []}
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

            <GodTube />

            <hr />
            <div className="row">
                <div className="col">
                    <Good />
                </div>
                <div className="col">
                    <Autoevolution />
                </div>
            </div>
            
            
            </div>
        </>
    );

}
export default Happy;