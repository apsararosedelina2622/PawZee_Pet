import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSInit = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return null; 
};

export default AOSInit;
