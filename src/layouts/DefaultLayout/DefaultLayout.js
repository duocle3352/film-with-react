import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Slider from '~/layouts/components/Slider';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="grid wide">
                <div className="row">
                    <Slider />
                </div>
            </div>
            <div className="grid wide">
                <div className="row">
                    <div>{children}</div>
                    <div className="col l-8 l-o-2 ">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
