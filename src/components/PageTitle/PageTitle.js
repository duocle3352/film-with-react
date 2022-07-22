import classNames from 'classnames/bind';
import style from './PageTitle.module.scss';

const cx = classNames.bind(style);

function PageTitle({ title }) {
    return <h1 className={cx('title', 'l-12')}>{title}</h1>;
}

export default PageTitle;
