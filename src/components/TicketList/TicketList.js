import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../store/actions/ticketActions';
import Ticket from '../Ticket/Ticket';
import './TicketList.scss';

const TicketList = () => {
  const dispatch = useDispatch();
  const { displayedItems, loading, error } = useSelector(state => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  const elemetns = displayedItems.map((ticket, index) => (
        <Ticket key = {index} 
        carrier = {ticket.carrier} 
        price = {ticket.price} 
        firstDate = {ticket.segments[0].date}
        secondDate = {ticket.segments[1].date}
        firstFlight = {ticket.segments[0].origin+` – `+ticket.segments[0].destination}
        secondFlight = {ticket.segments[1].origin+` – `+ticket.segments[1].destination}
        firstFlightStops = {ticket.segments[0].stops}
        secondFlightStops = {ticket.segments[1].stops}
        firstDuration = {ticket.segments[0].duration}
        secondDuration = {ticket.segments[1].duration}
        ></Ticket>
      ))
  return (
    <div className="ticket-list">
        {elemetns}
    </div>
  );
};


export default TicketList