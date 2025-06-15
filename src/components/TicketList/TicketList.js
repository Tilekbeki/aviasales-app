import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../store/actions/ticketActions';
import Ticket from '../Ticket/Ticket';
import './TicketList.scss';

const TicketList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  const elemetns = items.map((ticket, index) => (
        <Ticket key={index}>{ticket.price} {ticket.carrier}<br/> {ticket.segments[0].destination}</Ticket>
      ))
  return (
    <div className="ticket-list">
        {elemetns}
    </div>
  );
};


export default TicketList