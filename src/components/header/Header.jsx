import React from 'react';
import { Link, useHref } from 'react-router-dom';
import { navigateConstant } from '../../data/navigate-constant';
import { ItemNavigation } from './item-navigation/ItemNavigation';
import style from './Heade.module.scss';

export const Header = () => {
  const pageURL = useHref();

  return (
    <header>
      <Link to={'/'} className="">
        <img
          src="2019-09-30-logo_TO_2019.png"
          alt='Творческое объединение "Красная звезда"'
        />
      </Link>
      <nav className={style.nav}>
        <ul>
          {navigateConstant.map(({ text, link, description }) => (
            <ItemNavigation
              key={link}
              link={link}
              description={description}
              pageURL={pageURL}
            >
              {text}
            </ItemNavigation>
          ))}
        </ul>
      </nav>
    </header>
  );
};
