import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../pages/Global.module.scss';

export const PreviewArticle = ({ article }) => {
  const { title, datePublished, author, text, forWhatPublished, id } = article;

  return (
    <>
      <div className={style.preview}>
        <h2 className={style.title}>
          <Link to={`${id}`}>{title}</Link>
        </h2>

        <p className={style.description}>
          Опубликовано <Link to={datePublished.link}>{datePublished.date}</Link> Автор:
          <Link to={author.link}> {author.name}</Link>
        </p>
        <p className={style.text}>{text}</p>
        <p className={style.published}>
          <span>Опубликовано в </span>
          {forWhatPublished.map((item, index, array) => {
            if (index === array.length - 1) {
              return (
                <Link key={id} to={item.link}>
                  {item.place}
                </Link>
              );
            }

            return (
              <Link key={id + index} to={item.link}>
                {item.place},{' '}
              </Link>
            );
          })}
        </p>
      </div>
    </>
  );
};
