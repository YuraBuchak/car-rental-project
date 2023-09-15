import { RevolvingDot } from 'react-loader-spinner';
import scss from './Loader.module.scss';

export const Loader = () => {
  return (
    <>
      <div className={scss.loader_overlay}>
        <div className={scss.loader_container}>
          <RevolvingDot
            radius="45"
            strokeWidth="5"
            color="#0b44cd"
            secondaryColor="#3470ff"
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </>
  );
};

export default Loader;
