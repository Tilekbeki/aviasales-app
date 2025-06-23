import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../store/actions/ticketActions";
import { toggleError } from "../store/slices/ticketSlice";
import Ticket from "../Ticket/Ticket";
import "./TicketList.scss";

const TicketList = () => {
  const dispatch = useDispatch();
  const { displayedItems, loading, error, offset } = useSelector(
    (state) => state.tickets,
  );

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading) return <div className="loading-text">Загрузка...</div>;
  if (error) return <div>{error}</div>;
  const elements = displayedItems
    .slice(0, offset)
    .map((ticket, index) => (
      <Ticket
        key={index}
        carrier={ticket.carrier}
        price={ticket.price}
        firstDate={ticket.segments[0].date}
        secondDate={ticket.segments[1].date}
        firstFlight={`${ticket.segments[0].origin} – ${ticket.segments[0].destination}`}
        secondFlight={`${ticket.segments[1].origin} – ${ticket.segments[1].destination}`}
        firstFlightStops={ticket.segments[0].stops}
        secondFlightStops={ticket.segments[1].stops}
        firstDuration={ticket.segments[0].duration}
        secondDuration={ticket.segments[1].duration}
      />
    ));
  if (!displayedItems.length && !loading) {
    dispatch(toggleError("setError"));
    return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>;
  } else {
    return <div className="ticket-list">{elements}</div>;
  }
};

export default TicketList;
