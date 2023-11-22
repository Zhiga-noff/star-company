import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { articleInfo } from '../../data/article-info';
import style from '../Global.module.scss';
import { FileReport } from '../../components/file-report/FileReport';

export const ArticlePage = () => {
  const { id: idParams } = useParams();

  const [article] = articleInfo.filter((article) => {
    if (article.id === idParams) {
      return article;
    }
  });

  const { title, datePublished, author, text, forWhatPublished, file, id } = article;

  return (
    <>
      <div className={style.preview}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.description}>
          Опубликовано <Link to={`${id}`}>{datePublished}</Link> Автор:
          <Link to={author.link}> {author.name}</Link>
        </p>
        <p className={style.text}>{text}</p>
        {file.map(({ fileURL, fileName }, index) => (
          <FileReport key={id + id + index} fileName={fileName} fileURL={fileURL} />
        ))}
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
