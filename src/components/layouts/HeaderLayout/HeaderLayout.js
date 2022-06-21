import PropTypes from 'prop-types';
import Header from '~/components/layouts/components/Header';

function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
