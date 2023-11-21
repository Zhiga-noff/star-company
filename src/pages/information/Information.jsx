import React from 'react';
import style from '../Global.module.scss';
import { articleInfo } from '../../data/article-info';
import { PreviewArticle } from '../../components/preview-article/PreviewArticle';

export const Information = () => {
  const articles = articleInfo;

  return (
    <>
      <h6 className={style.miniTitle}>Архивы блога </h6>
      {articles.map((article) => (
        <PreviewArticle article={article} key={article.id} />
      ))}
    </>
  );
};
