import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 rounded-lg p-4 flex flex-col text-center text-white font-bold'>
            <h2 className='pt-4'>
                <span className='text-5xl'>${price} </span>
                <span className='text-2xl'>/mon </span>

            </h2>
            <h4 className='text-3xl my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full p-4 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;