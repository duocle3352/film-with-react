import Header from '~/components/layouts/components/Header';

function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default HeaderLayout;
