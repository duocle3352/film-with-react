import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { BodyItem } from '~/components/BodyItem';
import style from './BodyRender.module.scss';

const cx = classNames.bind(style);
function BodyRender({ listItem, title }) {
    return (
        <>
            <h1 className={cx('title', 'l-12')}>{title}</h1>
            <div className={'row'}>
                {listItem.map((item) => {
                    return <BodyItem key={item.id} data={item} large />;
                })}
            </div>
        </>
    );
}

BodyRender.propTypes = {
    listItem: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    large: PropTypes.bool,
};

export default BodyRender;
