import React from 'react';
import style from '../Global.module.scss';
import { useParams } from 'react-router-dom';
import { societiesConstant } from '../../data/societies-constant';

export const CompanyInfo = () => {
  const { id: idParams } = useParams();

  const [socient] = societiesConstant.filter((item) => {
    if (item.id === idParams) {
      return item;
    }
  });

  return (
    <>
      <h1 className={style.title}>{socient.name}</h1>
      <p className={style.text} dangerouslySetInnerHTML={{ __html: socient.text }}></p>
    </>
  );
};
