import Ticket from '../Ticket';
import './TicketList.scss'
const elements = Array.from({ length: 5 }, (_, index) => <Ticket key={index} />);

const TicketList = () => {
    return (
        <div className='ticket-list'>
            {elements}
        </div>
    );
}

export default TicketList;
