import "./Tabs.scss";
import { useSelector, useDispatch } from "react-redux";
import { sort } from "../store/slices/ticketSlice";
import { applyFiltersAndSort } from "../store/ticketsThunks"; // импортируем thunk

const Tabs = () => {
  const { sortType, loading } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  const handleSortChange = (type) => {
    if (loading) return; // пока грузится — ничего не делаем
    dispatch(sort(type));
    dispatch(applyFiltersAndSort());
  };

  return (
    <div className="tabs">
      <div
        className={`tab ${sortType === "cheapest" ? "tab_active" : ""} ${loading ? "disabled" : ""}`}
        onClick={() => handleSortChange("cheapest")}
      >
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div
        className={`tab ${sortType === "fastest" ? "tab_active" : ""} ${loading ? "disabled" : ""}`}
        onClick={() => handleSortChange("fastest")}
      >
        САМЫЙ БЫСТРЫЙ
      </div>
    </div>
  );
};

export default Tabs;
