import Good from "../Widgets/Good";
import Autoevolution from "../Widgets/Autoevolution";
import GodTube from "../Widgets/GodTube";


function Happy() {


    return (
        <>
            <div className="wrapper mt-4 container">
            Good stuff
            <br />
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