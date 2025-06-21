import { DateTime, Duration } from "luxon";
import './Ticket.scss';

const Ticket = (props) => {
    const {carrier, price, firstFlight, secondFlight, firstDate, secondDate, firstFlightStops, secondFlightStops, firstDuration, secondDuration} = props;
    
    const durationFirst = Duration.fromObject({ minutes: firstDuration })
                                    .normalize() // Конвертирует избыточные минуты в часы
                                    .toFormat("hh'ч' mm'м'");
    const durationSecond = Duration.fromObject({ minutes: secondDuration })
                                    .normalize() // Конвертирует избыточные минуты в часы
                                    .toFormat("hh'ч' mm'м'");
    const caculatedDates = (FlightDate) => {
        const initialDate = DateTime.fromISO(FlightDate, {zone: 'utc'});
        const resultDate = initialDate.plus({ minutes: 1186 });
        const formattedTime = resultDate.toFormat('HH:mm');
        return `${initialDate.toFormat('HH:mm')} - ${formattedTime}`
    }
    const optionsOfOverlays = (count) => {
    switch (count) {
        case 0:
            return 'БЕЗ ПЕРЕСАДОК';
        case 1:
            return '1 ПЕРЕСАДКА';
        default:
            return `${count} ПЕРЕСАДКИ`;
    }
};
    return (
        <div className="ticket">
            <div className='ticket__header'>
                 <div className='ticket__price'>{price.toLocaleString()} Р</div>
                <div className='ticket__logo'><img src={`https://pics.avs.io/110/36/${carrier}.png`} alt={`логотип авиакомпании ${carrier}`}/></div>
                 
            </div>
            <div className='ticket__body'>
                <div className='ticket__segments'>
                    <div className='ticket__flight'>
                        <div className='gray-text'>{firstFlight}</div>
                        <div>{caculatedDates(firstDate)}</div>
                    </div>
                    <div className='ticket__duration'>
                        <div className='gray-text'>В ПУТИ</div>
                        <div>{durationFirst}</div>
                    </div>
                    <div className='ticket__layover'>
                        <div className='gray-text'>{optionsOfOverlays(firstFlightStops.length)}</div>
                        {firstFlightStops.length>0 ? <div>{firstFlightStops.join(', ')}</div> : null}
                    </div>
                </div>
                <div className='ticket__segments'>
                    <div className='ticket__flight'>
                        <div className='gray-text'>{secondFlight}</div>
                        <div>{caculatedDates(secondDate)}</div>
                    </div>
                    <div className='ticket__duration'>
                        <div className='gray-text'>В ПУТИ</div>
                        <div>{durationSecond}</div>
                    </div>
                    <div className='ticket__layover'>
                        <div className='gray-text'>{optionsOfOverlays(secondFlightStops.length)}</div>
                        {secondFlightStops.length>0 ? <div>{secondFlightStops.join(', ')}</div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
