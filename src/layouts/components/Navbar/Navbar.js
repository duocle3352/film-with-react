import PropTypes from 'prop-types';

function Navbar({ children }) {
    return <div>{children}</div>;
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Navbar;
