import './Pagination.scss';

const Pagination = ({newTicketsCount=5}) => {
    return <div className='pagination'>ПОКАЗАТЬ ЕЩЕ {newTicketsCount} БИЛЕТОВ</div>
}

export default Pagination;