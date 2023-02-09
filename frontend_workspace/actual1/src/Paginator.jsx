import * as React from "react";
import Pagination from "react-bootstrap/Pagination";

interface PaginatorProps {
    totalPages: number;
    currentPage: number;
    changePageHandler: (page: number) => void;
}

const Paginator: React.StatelessComponent<PaginatorProps> = (props) => {

    let items = null;
    const getItems = (startNumber: number, endNumber: number): any => {
        const items = [];

        for (let number = startNumber; number <= endNumber; number++) {
            items.push(
                <Pagination.Item key={number}
                                 onClick={() => props.changePageHandler(number)}
                                 active={number === props.currentPage}>
                    {number}
                </Pagination.Item>
            );
        }

        return items;
    };

    if (props.totalPages <= 6) {
        items = getItems(1, props.totalPages);
    }
    else {

        if (props.currentPage <= 3) {

            items = getItems(1, 4);
            items.push(<Pagination.Ellipsis />);
            items = items.concat(getItems(props.totalPages, props.totalPages));
        }
        else if (props.currentPage > 3 && props.currentPage < props.totalPages - 3) {

            items = getItems(1, 1);
            items.push(<Pagination.Ellipsis />);
            items = items.concat(getItems(props.currentPage - 1, props.currentPage - 1));
            items = items.concat(getItems(props.currentPage, props.currentPage));
            items = items.concat(getItems(props.currentPage + 1, props.currentPage + 1));
            items.push(<Pagination.Ellipsis />);
            items = items.concat(getItems(props.totalPages, props.totalPages));
        }
        else {
            
            items = getItems(1, 1);
            items.push(<Pagination.Ellipsis />);
            items = items.concat(getItems(props.totalPages - 3, props.totalPages));
        }

    }

    return (
        <Pagination>
            {props.currentPage > 1 &&
                <Pagination.Prev onClick={() => props.changePageHandler(props.currentPage - 1)} />
            }
            {items}
            {props.currentPage < props.totalPages &&
                <Pagination.Next onClick={() => props.changePageHandler(props.currentPage + 1)} />
            }
        </Pagination>
    );
}

export default Paginator;