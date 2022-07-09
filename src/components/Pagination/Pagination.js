import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePagination, DOTS } from '~/hook';
import style from './Pagination.module.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
let keyNumber = 0;

function Pagination({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
}) {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const handleNext = () => {
        onPageChange(currentPage + 1);
    };

    const handlePrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={cx('pagination-container', 'l-8', 'l-o-2', {
                [className]: className,
            })}
        >
            {/* Left navigation arrow */}
            <li
                className={cx('pagination-item', {
                    disabled: currentPage === 1,
                })}
                onClick={handlePrevious}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </li>
            {/* main pagination */}
            {paginationRange.map((pageNumber) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                keyNumber += 1;
                if (pageNumber === DOTS) {
                    return (
                        <li
                            key={`${pageNumber}${keyNumber}`}
                            className={cx('pagination-item', 'dots')}
                        >
                            &#8230;
                        </li>
                    );
                }

                // Render our Page Pills
                return (
                    <li
                        key={pageNumber}
                        className={cx('pagination-item', {
                            selected: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={cx('pagination-item', {
                    disabled: currentPage === lastPage,
                })}
                onClick={handleNext}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </li>
        </ul>
    );
}

Pagination.propTypes = {
    onPageChange: PropTypes.func,
    totalCount: PropTypes.number.isRequired,
    siblingCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    className: PropTypes.string,
};

export default Pagination;
