import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

/* eslint-disable react/prop-types */
const Slider = ({showPrevItems, showNextItems, canShowPrev, canShowNext}) => {
    return (
        <>
            <div className="flex items-center">
                <button className="text-lg font-medium text-orange-600 hover:text-orange-400 mr-2">
                    Add More
                </button>
                <button
                    onClick={showPrevItems}
                    className={`text-blue-500 cursor-pointer ${canShowPrev ? '' : 'opacity-50'}`}
                    disabled={!canShowPrev}
                >
                    <MdKeyboardArrowLeft className="text-4xl text-black opacity-80" />
                </button>
                <button
                    onClick={showNextItems}
                    className={`text-blue-500 cursor-pointer ${canShowNext ? '' : 'opacity-50'}`}
                    disabled={!canShowNext}
                >
                    <MdKeyboardArrowRight className="text-4xl text-black opacity-80" />
                </button>
            </div>
        </>
    );
};

export default Slider;