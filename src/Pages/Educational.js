import Autoevolution from "../Widgets/Autoevolution";
import MakeUseOf from '../Widgets/MakeUseOf';
import WOTD from '../Widgets/WOTD';
import Devto from "../Widgets/Devto";
import Lifehacker from "../Widgets/Lifehacker";
function Educational() {


    return (
        <>
            <div className="wrapper mt-4 container-fluid">
            Educational

            <div className="row">
                <div className="col-md-12">
                    <Autoevolution />
                </div>
                <div className="col-md-12">
                    <MakeUseOf slidesper={3} />
                </div>
                <div className="col-md-6">
                    <WOTD />
                </div>
                <div className="col-md-6">
                    <Devto />
                </div>
                <div className="col-sm-12">
                    <Lifehacker />
                </div>
            </div>
            </div>
        </>
    );

}
export default Educational;
