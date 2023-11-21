import React from 'react';
import { Link } from 'react-router-dom';
import { navigateConstant } from '../../data/navigate-constant';
import style from './BreadCrumbs.module.scss';

const BreadCrumbs = ({ pageURL }) => {
  const [namePage] = navigateConstant.filter((item) => {
    if (pageURL === item.link) {
      return item;
    }
  });

  return (
    <nav className={style.nav}>
      <Link to={'/'}>Начало</Link>
      <span className={style.arrow}>›</span>
      <span>{namePage.text}</span>
    </nav>
  );
};

export default BreadCrumbs;
