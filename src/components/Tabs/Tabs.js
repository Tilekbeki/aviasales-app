import './Tabs.scss';
import { useSelector } from 'react-redux';

const Tabs = () => {
  const activeSort = useSelector((state) => state.sortType);


  return (
    <div className="tabs">
      <div className={`tab ${activeSort === 'cheapest' ? 'tab_active' : ''}`} >
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div className={`tab ${activeSort === 'fast' ? 'tab_active' : ''}`}>
        САМЫЙ БЫСТРЫЙ
      </div>
    </div>
  );
};

export default Tabs;
