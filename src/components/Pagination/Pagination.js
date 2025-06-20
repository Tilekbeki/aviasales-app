import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import ticketsReducer from '../store/slices/ticketSlice';

const Pagination = ({newTicketsCount=5}) => {
    const dispatch = useDispatch();
    const offset = useSelector(state => state.offset);

    return <div className='pagination' onClick={()=>dispatch({type: 'tickets/loadMore'})}>ПОКАЗАТЬ ЕЩЕ {newTicketsCount} БИЛЕТОВ</div>
}

export default Pagination;