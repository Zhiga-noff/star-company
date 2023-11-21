import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

export const Footer = () => {
  const actualYear = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <p className="">
        Официальный сайт АО «ТО «Красная звезда», ОАО «ТРК ВС РФ «ЗВЕЗДА», ООО
        «Издательский Дом «ЗВЕЗДА» и ООО «Киностудия «ЗВЕЗДА». Используется для размещения
        информации, связанной с деятельностью этих организаций, в случаях, в объеме и в
        порядке, которые предусмотрены действующим законодательством.
      </p>
      <p>
        © {actualYear} <Link to={'/'}>Творческое объединение "Красная звезда" </Link>
      </p>
    </footer>
  );
};
