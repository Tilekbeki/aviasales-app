import './Tabs.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../store/slices/sortSlice';

const Tabs = () => {
  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.sort);

  const handleClick = (type) => {
    dispatch(setSort(type));
  };

  return (
    <div className="tabs">
      <div className={`tab ${activeSort === 'cheap' ? 'tab_active' : ''}`} onClick={() => handleClick('cheap')}>
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div className={`tab ${activeSort === 'fast' ? 'tab_active' : ''}`} onClick={() => handleClick('fast')}>
        САМЫЙ БЫСТРЫЙ
      </div>
      <div className={`tab ${activeSort === 'optimal' ? 'tab_active' : ''}`} onClick={() => handleClick('optimal')}>
        ОПТИМАЛЬНЫЙ
      </div>
    </div>
  );
};

export default Tabs;
