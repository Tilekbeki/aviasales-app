import './Options.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAll, toggleFilter } from '../store/slices/filtersSlice';
import { applyFiltersAndSort } from '../store/ticketsThunks'; // импортируй свой thunk

const Options = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleToggleAll = () => {
    dispatch(toggleAll());
    dispatch(applyFiltersAndSort());
  };

  const handleToggleFilter = (key) => {
    dispatch(toggleFilter(key));
    dispatch(applyFiltersAndSort());
  };

  return (
    <div className="side">
      <div className="side__title">Количество пересадок</div>
      <div className="options-list">
        <label>
          <input type="checkbox" checked={filters.all} onChange={handleToggleAll} />
          Все
        </label>
        <label>
          <input type="checkbox" checked={filters.zero} onChange={() => handleToggleFilter('zero')} />
          Без пересадок
        </label>
        <label>
          <input type="checkbox" checked={filters.one} onChange={() => handleToggleFilter('one')} />
          1 пересадка
        </label>
        <label>
          <input type="checkbox" checked={filters.two} onChange={() => handleToggleFilter('two')} />
          2 пересадки
        </label>
        <label>
          <input type="checkbox" checked={filters.three} onChange={() => handleToggleFilter('three')} />
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Options;
