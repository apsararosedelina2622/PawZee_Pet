import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  }, [navigate, setUser]);

  return null;
};

export default Logout;
