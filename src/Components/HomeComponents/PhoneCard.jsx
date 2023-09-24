import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { Link } from "react-router-dom";
const PhoneCard = ({ phone }) => {

    const { id, rating, phone_name, brand_name, price, image } = phone || {}

    return (
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-52 w-auto object-cover mx-auto"
                    />
                </div>
                <div className="p-6">

                    <p className="block font-bold text-xl font-sans leading-relaxed text-blue-gray-900 antialiased">
                        {brand_name}
                    </p>

                    <div className="mb-2 flex items-center justify-between">

                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {phone_name}
                        </p>

                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            ${price}
                        </p>
                    </div>

                    <div>
                        <Rating
                            fullSymbol={<svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>}
                            emptySymbol={<svg className="w-4 h-4 text-gray-300 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>}
                            initialRating={rating}
                            readonly
                        />
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        With plenty of talk and listen time, voice-activated Siri access, and an
                        available wireless charging case.
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/phone/${id}`} state={phone_name}>
                        <button
                            className="block bg-gray-300 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

PhoneCard.propTypes = {
    phone: PropTypes.object.isRequired
}

export default PhoneCard;