import './Tabs.scss';
import { useSelector, useDispatch } from 'react-redux';
import { sort } from '../store/slices/ticketSlice';
import { applyFiltersAndSort } from '../store/ticketsThunks'; // импортируем thunk

const Tabs = () => {
  const { sortType } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  const handleSortChange = (type) => {
    dispatch(sort(type));             // меняем тип сортировки в store
    dispatch(applyFiltersAndSort());  // пересчитываем tickets.displayedItems
  };

  return (
    <div className="tabs">
      <div
        className={`tab ${sortType === 'cheapest' ? 'tab_active' : ''}`}
        onClick={() => handleSortChange('cheapest')}
      >
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div
        className={`tab ${sortType === 'fastest' ? 'tab_active' : ''}`}
        onClick={() => handleSortChange('fastest')}
      >
        САМЫЙ БЫСТРЫЙ
      </div>
    </div>
  );
};

export default Tabs;
