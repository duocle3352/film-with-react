import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Slider from '~/layouts/components/Slider';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="row">
                <Slider />
            </div>
            {children}
            <Footer />
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
