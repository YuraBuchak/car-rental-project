import PropTypes from 'prop-types';
import scss from './Paginator.module.scss';
import { useEffect } from 'react';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';

export const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5;

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'instant',
    });
  }, [currentPage]);

  const generatePageNumbers = () => {
    const pagesToShow = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
    return pagesToShow;
  };

  const pageNumbers = generatePageNumbers();
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

  return (
    <div className={scss.button__wrapper}>
      <button
        type="button"
        className={scss.paginator_Btn}
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <BiChevronsLeft className={scss.svg_Btn} size={27} />
      </button>

      <ul className={scss.button_number__wrapper}>
        {visiblePageNumbers.map(page => (
          <li key={page}>
            <button
              type="button"
              className={`${scss.paginator_Btn} ${
                page === currentPage ? scss.active : ''
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
        className={scss.paginator_Btn}
      >
        <BiChevronsRight className={scss.svg_Btn} size={27} />
      </button>
    </div>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginator;
