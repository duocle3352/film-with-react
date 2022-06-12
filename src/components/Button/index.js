import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
    children,
    disable,
    primary = false,
    blue = false,
    gold = false,
    small = false,
    large = false,
    to,
    href,
    leftIcon,
    rightIcon,
    onClick,
    ...passprops
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        blue,
        gold,
        disable,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
