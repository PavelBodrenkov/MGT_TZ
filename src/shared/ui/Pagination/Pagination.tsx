import {Component} from "react";
import cls from './Pagination.module.scss';
import {DOTS, renderPaginate} from "shared/ui/Pagination/services";
import {classNames} from "shared/lib/classNames/classNames";

type PaginationProps = {
    onPageChange: (page: number) => void,
    totalCount: number,
    siblingCount?: number,
    currentPage: number,
    pageSize:number,
};

export class Pagination extends Component<PaginationProps, {}> {
    constructor(props: PaginationProps) {
        super(props);
        this.onNext = this.onNext.bind(this)
        this.onPrevious = this.onPrevious.bind(this)
    }

    onNext() {
        const {onPageChange, currentPage} = this.props
        onPageChange(currentPage + 1);
    };

    onPrevious() {
        const {onPageChange, currentPage} = this.props
        onPageChange(currentPage - 1);
    };

    render() {
        const {totalCount, pageSize, siblingCount, currentPage} = this.props
        const paginationRange = renderPaginate(totalCount, pageSize, siblingCount, currentPage)
        let lastPage = paginationRange[paginationRange.length - 1];

        return (
            <ul
                className={classNames(cls.paginationContainer, {}, [cls.paginationBar])}
            >
                <li
                    className={classNames(cls.paginationItem, {
                        [cls.disabled]: currentPage === 1
                    }, [])}
                    onClick={this.onPrevious}
                >
                    {'<'}
                </li>
                {paginationRange.map((pageNumber) => {

                    if (pageNumber === DOTS) {
                        return <li key={pageNumber} className="pagination-item dots">&#8230;</li>;
                    }

                    return (
                        <li
                            key={pageNumber}
                            className={classNames(cls.paginationItem, {
                                [cls.selected]: pageNumber === currentPage
                            }, [])}
                            onClick={() => this.props.onPageChange(Number(pageNumber))}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className={classNames(cls.paginationItem, {
                        [cls.disabled]: currentPage === lastPage
                    })}
                    onClick={this.onNext}
                >
                    {'>'}
                </li>
            </ul>
            // <div
            //     className={cls.paginator}
            // >
            //     <button
            //         className={cls.arrow}
            //         type="button"
            //         onClick={this.handlePrevPageClick}
            //         disabled={disable.left}
            //     >
            //         {'<'}
            //     </button>
            //     {nav && (
            //         <span className={cls.navigation} >
            //             {nav.current} / {nav.total}
            //         </span>
            //     )}
            //     <button
            //         className={cls.arrow}
            //         type="button"
            //         onClick={this.handleNextPageClick}
            //         disabled={disable.right}
            //     >
            //         {'>'}
            //     </button>
            // </div>

        )
    }
}