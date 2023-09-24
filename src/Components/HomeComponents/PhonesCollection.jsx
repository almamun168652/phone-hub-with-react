
import PropTypes from 'prop-types';
import PhoneCard from './PhoneCard';






const PhonesCollection = ({phones}) => {
    return (
        <div>
            <h1 className="text-center text-2xl font-semibold my-5">Our Phones Collection</h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                    }
                </div>
            </div>
        </div>
    );
};



PhonesCollection.propTypes = {
    phones: PropTypes.array
}

export default PhonesCollection;