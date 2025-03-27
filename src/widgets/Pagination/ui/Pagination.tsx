import React from 'react';
import { DataPagination } from '@/entites/Employee/model/types/employee';
import { Button } from '@/shared/Button';
import ArrowPrev from '../assets/arrowPrev.svg?react';
import ArrowNext from '../assets/arrowNext.svg?react';
import { ButtonTheme } from '@/shared/Button/types/ButtonTheme';
import cls from './Pagination.module.css';

interface PaginationProps {
    pagination: DataPagination | null;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    pagination,
    onPageChange,
}) => {
    const pageCurrent = pagination?.page ?? 1;
    const total = pagination?.total ?? 1;
    const maxPagesToShow = 3;
    const showEllipsis = total > maxPagesToShow + 1;

    const getPageNumbers = () => {
        const pages = [];

        for (let i = 1; i <= Math.min(maxPagesToShow, total); i++) {
            pages.push(i);
        }

        if (showEllipsis) {
            pages.push(null);
        }

        if (total > maxPagesToShow) {
            pages.push(total);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const handleNextPageClick = () => {
        onPageChange(pageCurrent + 1);
    };

    const handlePrevPageClick = () => {
        if (pageCurrent > 0) {
            onPageChange(pageCurrent - 1);
        }
    };

    return (
        <div className={cls.paginationContainer}>
            <Button
                buttonTheme={ButtonTheme.BUTTON_PAGINATION}
                onClick={handlePrevPageClick}
            >
                <ArrowPrev />
            </Button>
            <ul className={cls.pagination}>
                {pageNumbers.map((number, index) =>
                    number === null ? (
                        <li
                            key={`ellipsis-${index}`}
                            className={`${cls.pageItem} disabled`}
                        >
                            <span className={cls.pageLink}>…</span>
                        </li>
                    ) : (
                        <li
                            key={number}
                            className={`${cls.pageItem} ${number === pageCurrent ? cls.active : ''}`}
                        >
                            <button
                                onClick={() => handlePageClick(number)}
                                className={cls.pageLink}
                            >
                                {number}
                            </button>
                        </li>
                    ),
                )}
            </ul>
            <Button
                buttonTheme={ButtonTheme.BUTTON_PAGINATION}
                onClick={handleNextPageClick}
            >
                <ArrowNext />
            </Button>
        </div>
    );
};

export default Pagination;
