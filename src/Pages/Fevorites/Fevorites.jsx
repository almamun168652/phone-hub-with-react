import { useState } from "react";
import { useEffect } from "react";
import FevoriteCard from "./FevoriteCard";


const Fevorites = () => {

    const [fevorites, setFevorites] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [phonePrice, setPhonePrice] = useState(0);

    useEffect(() => {

        const fevoritesPhones = JSON.parse(localStorage.getItem('fevorites'));

        if (fevoritesPhones) {
            setFevorites(fevoritesPhones);
            const totalPhonePrice = fevorites.reduce((preValue, currentItem) => preValue + currentItem.price, 0);
            setPhonePrice(totalPhonePrice);
        } else {
            setNoFound('No Data Found');
        }


    }, [])

    const handleRemove = () => {
        setFevorites([]);
        localStorage.clear();
        setNoFound('No Data Found');
    }

    return (
        <div>

            {
                noFound ? <p className="mt-36 text-2xl font-bold flex items-center justify-center">{noFound}</p> : <div>
                    <div>

                        {fevorites.length > 0 && <div>
                            <div className="text-center"><button onClick={handleRemove} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete All Fevorites</button>
                            </div>
                            <p className="text-xl mb-5 font-semibold text-right">Total Price : {phonePrice}</p>
                        </div>}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {
                                isShow ? fevorites?.map(phone => <FevoriteCard key={phone.id} phone={phone}></FevoriteCard>) :
                                    fevorites?.slice(0, 4).map(phone => <FevoriteCard key={phone.id} phone={phone}></FevoriteCard>)
                            }
                        </div>

                        {
                            fevorites.length > 4 && <div className="mt-5 text-center"><button
                                onClick={() => setIsShow(!isShow)}
                                type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{isShow ? 'See Less' : 'See More'}</button>
                            </div>
                        }

                    </div>
                </div>
            }

        </div>
    );
};

export default Fevorites;