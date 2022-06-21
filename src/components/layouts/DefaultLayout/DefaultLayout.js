import PropTypes from 'prop-types';
import Header from '~/components/layouts/components/Header';
import Search from '~/components/layouts/components/Search';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="grid wide">
                <div className="row">
                    <div className="col l-8 l-o-2 ">
                        <Search />
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
