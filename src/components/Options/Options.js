import './Options.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAll, toggleFilter } from '../store/slices/filtersSlice';

const Options = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <div className="side">
      <div className="side__title">Количество пересадок</div>
      <div className="options-list">
        <label>
          <input type="checkbox" checked={filters.all} onChange={() => dispatch(toggleAll())} />
          Все
        </label>
        <label>
          <input type="checkbox" checked={filters.zero} onChange={() => dispatch(toggleFilter('zero'))} />
          Без пересадок
        </label>
        <label>
          <input type="checkbox" checked={filters.one} onChange={() => dispatch(toggleFilter('one'))} />
          1 пересадка
        </label>
        <label>
          <input type="checkbox" checked={filters.two} onChange={() => dispatch(toggleFilter('two'))} />
          2 пересадки
        </label>
        <label>
          <input type="checkbox" checked={filters.three} onChange={() => dispatch(toggleFilter('three'))} />
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Options;
