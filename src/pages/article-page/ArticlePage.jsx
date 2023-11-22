import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { articleInfo } from '../../data/article-info';
import style from '../Global.module.scss';

export const ArticlePage = () => {
  const { id: idParams } = useParams();

  const [article] = articleInfo.filter((article) => {
    if (article.id === idParams) {
      return article;
    }
  });

  const { title, datePublished, author, text, forWhatPublished, id } = article;

  return (
    <>
      <div className={style.preview}>
        <h2 className={style.title}>{title}</h2>
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
