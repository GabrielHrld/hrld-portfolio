import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useWindowScroll } from 'react-use';

import '../styles/components/ScrollToTop.scss';

const ScrollToTop = ({ light }) => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) return false;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="scrollToTop" onClick={scrollToTop}>
      <IoIosArrowUp className={light ? 'icon light' : 'icon'} />
    </div>
  );
};

export default ScrollToTop;
