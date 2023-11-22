import { useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';
import { articleInfo } from '../data/article-info';
import { navigateConstant } from '../data/navigate-constant';
import { updateTitleTag } from '../utils/update-title-tag';

export const usePageIdParamsHook = () => {
  const [windowWeight, setWindowWight] = useState(window.innerWidth);
  const [adaptiveFlag, setAdaptiveFlag] = useState(false);

  const [namePage, setNamePage] = useState('');

  const pageURL = useHref();

  useEffect(() => {
    if (windowWeight <= 650) {
      setAdaptiveFlag(true);
    }

    articleInfo.forEach((item) => {
      const idParams = pageURL.includes(item.id);
      if (!idParams) {
        navigateConstant.forEach(({ text, link }) => {
          if (link === pageURL) {
            setNamePage(text);
            updateTitleTag(text);
          }
        });
        return;
      }
      setNamePage(item.title);
      updateTitleTag(item.title);
    });
  }, [pageURL]);

  return { adaptiveFlag, namePage, pageURL };
};
