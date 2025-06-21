import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import ticketsSlice from '../store/slices/ticketSlice';
import { loadMore } from '../store/slices/ticketSlice';

const Pagination = () => {
    const dispatch = useDispatch();

    return <div className='pagination' onClick={()=>dispatch(loadMore())}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</div>
}

export default Pagination;