import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from '../../pages/Global.module.scss';

export const PreviewArticle = ({ article }) => {
  const { title, datePublished, author, text, forWhatPublished, id } = article;

  return (
    <>
      <div className={style.preview}>
        <NavLink to={`${id}`}>
          <h2 className={style.title}>{title}</h2>
        </NavLink>
        <p className={style.description}>
          Опубликовано <Link to={datePublished.link}>{datePublished.date}</Link> Автор:
          <Link to={author.link}> {author.name}</Link>
        </p>
        <p className={style.text}>{text}</p>
        <p className={style.published}>
          <span>Опубликовано в </span>
          <Link to={forWhatPublished.link}>{forWhatPublished.place}</Link>
        </p>
      </div>
    </>
  );
};
