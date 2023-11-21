import React from 'react';
import { useHref } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs';
import { Societies } from '../societies/Societies';

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
