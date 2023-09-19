import { useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import scss from './EmptyPage.module.scss';

const EmptyPage = () => {
  const navigate = useNavigate();
  return (
    <div className={scss.container}>
      <FiHeart
        style={{
          fill: 'transparent',
          stroke: '#3470ff',
        }}
        size={120}
      />
      <p className={scss.aboutDescription}>
        You have not added any favorite car yet
      </p>
      <button onClick={() => navigate('/catalog')} className={scss.chooseBtn}>
        Pick a car
      </button>
    </div>
  );
};

export default EmptyPage;
