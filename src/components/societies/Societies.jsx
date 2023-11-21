import React from 'react';
import style from './Societies.module.scss';
import { Link } from 'react-router-dom';
import { societiesConstant } from '../../data/societies-constant';

export const Societies = () => {
  return (
    <aside className={style.containerAside}>
      <h2 className={style.subtitle}>Дочерние и зависимые общества</h2>
      <ul>
        {societiesConstant.map(({ text, link }) => (
          <li>
            <Link to={link}>{text}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
