import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Heade.module.scss';

export const ItemNavigation = ({ children, link, description, pageURL }) => {
  return !description ? (
    <Link to={link} className={`${pageURL === link && style.active}`}>
      {children}
    </Link>
  ) : (
    <Link to={link} className={`${pageURL === link && style.active}`}>
      <abbr title={description}>{children}</abbr>
    </Link>
  );
};
