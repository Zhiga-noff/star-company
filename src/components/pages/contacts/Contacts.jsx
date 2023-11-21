import React from 'react';
import style from '../Global.module.scss';
import { Map } from '../../map/Map';

export const Contacts = () => {
  return (
    <>
      <h1 className={style.title}>Контакты</h1>
      <p className={style.text}>
        Акционерное общество «Творческое объединение «Красная звезда»
      </p>
      <p className={style.text}>
        Адрес: 129164, г. Москва, Проспект Мира, д. 126. <br />
        Тел.: +7(495) 645-92-89 <br />
        Эл. почта: info@to-redstar.ru
      </p>
      <div className={style.mapContainer}>
        <Map />
      </div>
    </>
  );
};
