import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className="mr-10 hover:bg-yellow-500 hover:shadow-xl rounded-lg px-6 sm:space-y-2 " >
            <a className=' ' href={`route.path`} >{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;