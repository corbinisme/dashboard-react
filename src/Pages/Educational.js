import Autoevolution from "../Widgets/Autoevolution";
import MakeUseOf from '../Widgets/MakeUseOf';
import WOTD from '../Widgets/WOTD';
function Educational() {


    return (
        <>
            <div className="wrapper mt-4 container">
            Educational

            <div className="row">
                <div className="col-sm-12">
                    <Autoevolution />
                </div>
                <div className="col-sm-12">
                    <MakeUseOf slidesper={3} />
                </div>
                <div className="col-sm-6">
                    <WOTD />
                </div>
            </div>
            </div>
        </>
    );

}
export default Educational;