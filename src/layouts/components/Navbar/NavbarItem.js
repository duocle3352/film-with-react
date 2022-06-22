import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Navbar.module.scss';

const cx = classNames.bind(style);

function NavbarItem({ title, to }) {
    return (
        <NavLink
            className={(nav) => cx('nav-item', { active: nav.isActive })}
            to={to}
        >
            <span>{title}</span>
        </NavLink>
    );
}

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NavbarItem;
