import { useAppDispatch, useAppSelector } from '../state';
import { fetchGDSC } from '../state/home/home.actions';

const useGDSC = () => {
  const { loading, gdsc } = useAppSelector(state => state.homeReducer);
  const dispatch = useAppDispatch();
  const getGDSC = () => dispatch(fetchGDSC());

  return {
    getGDSC,
    loading,
    gdsc,
  };
};

export default useGDSC;
