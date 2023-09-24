import PropTypes from 'prop-types';
import swal from 'sweetalert';

const DPhoneAfterShow = ({phone}) => {

    const { id, phone_name, brand_name, price, image } = phone || {}

    
    const handleAddToFevorite = () => {
        const addedPhoneArray = [];
        const fevoritesPhones = JSON.parse(localStorage.getItem('fevorites'));

        if(!fevoritesPhones){
            addedPhoneArray.push(phone);
            localStorage.setItem('fevorites', JSON.stringify(addedPhoneArray));
            swal("Good job!", "added successfully", "success");
        }else{
            const isExists = fevoritesPhones?.find(phone => phone.id === id);
            if(!isExists){
                addedPhoneArray.push(...fevoritesPhones , phone);
                localStorage.setItem('fevorites' , JSON.stringify(addedPhoneArray));
                swal("Good job!", "added successfully", "success");
            }else{
                swal("Oops!", "no duplicate", "error");
            }
        }
    }


    return (
        <div>
            <div className="">
                <div className="relative flex max-w-[48rem] mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg border">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            className="h-full w-full object-cover scale-75"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {phone_name}
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {brand_name}
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Like so many organizations these days, Autodesk is a company in
                            transition. It was until recently a traditional boxed software company
                            selling licenses. Yet its own business model disruption is only part of
                            the story
                        </p>
                        <p>${price}</p>
                            <button
                                onClick={handleAddToFevorite}
                                className="flex mt-4 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add To Fevorites

                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


DPhoneAfterShow.propTypes = {
    phone: PropTypes.object
}

export default DPhoneAfterShow;