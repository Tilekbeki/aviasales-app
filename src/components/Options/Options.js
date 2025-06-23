import "./Options.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleAll, toggleFilter } from "../store/slices/filtersSlice";
import { applyFiltersAndSort } from "../store/ticketsThunks";

const Options = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const loading = useSelector((state) => state.tickets.loading); // добавили

  const handleToggleAll = () => {
    if (loading) return; // дополнительная защита
    dispatch(toggleAll());
    dispatch(applyFiltersAndSort());
  };

  const handleToggleFilter = (key) => {
    if (loading) return;
    dispatch(toggleFilter(key));
    dispatch(applyFiltersAndSort());
  };

  return (
    <div className="side">
      <div className="side__title">Количество пересадок</div>
      <div className="options-list">
        <label>
          <input
            type="checkbox"
            checked={filters.all}
            onChange={handleToggleAll}
            disabled={loading}
          />
          Все
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.zero}
            onChange={() => handleToggleFilter("zero")}
            disabled={loading}
          />
          Без пересадок
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.one}
            onChange={() => handleToggleFilter("one")}
            disabled={loading}
          />
          1 пересадка
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.two}
            onChange={() => handleToggleFilter("two")}
            disabled={loading}
          />
          2 пересадки
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.three}
            onChange={() => handleToggleFilter("three")}
            disabled={loading}
          />
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Options;
