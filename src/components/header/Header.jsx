import React, { useEffect, useState } from 'react';
import { Link, useHref, useParams } from 'react-router-dom';
import { navigateConstant } from '../../data/navigate-constant';
import { ItemNavigation } from './item-navigation/ItemNavigation';
import style from './Heade.module.scss';
import logo from '../../img/2019-09-30-logo_TO_2019.png';
import { usePageIdParamsHook } from '../../hooks/use-page-id-params.hook';

export const Header = () => {
  const [isHiddenMenu, setIsHiddenMenu] = useState(false);
  const { adaptiveFlag, namePage, pageURL } = usePageIdParamsHook();

  const onClickForBurger = () => {
    setIsHiddenMenu((pre) => !pre);
  };

  return (
    <header>
      <Link to={'/'} className="">
        <img
          src={logo}
          style={{ maxWidth: '100%' }}
          alt='Творческое объединение "Красная звезда"'
        />
      </Link>
      <nav className={style.nav} onClick={onClickForBurger}>
        {adaptiveFlag ? <p>{namePage}</p> : ''}
        <ul className={`${style.menu} ${isHiddenMenu && style.show}`}>
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
        {adaptiveFlag ? (
          <div className={style.burger}>
            <span></span>
          </div>
        ) : (
          ''
        )}
      </nav>
    </header>
  );
};
