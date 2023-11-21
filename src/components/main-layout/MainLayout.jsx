import React from 'react';
import { useHref } from 'react-router-dom';
import { Societies } from '../societies/Societies';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs';

export const MainLayout = ({ children }) => {
  const pageURL = useHref();

  return (
    <main>
      <section>
        {pageURL !== '/' && <BreadCrumbs pageURL={pageURL} />}
        {children}
      </section>
      <Societies />
    </main>
  );
};
