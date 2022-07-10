import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function HeaderLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
