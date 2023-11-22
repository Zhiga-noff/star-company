import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainLayout } from './components/main-layout/MainLayout';
import { AboutUs } from './pages/about-us/AboutUs';
import { Contacts } from './pages/contacts/Contacts';
import { Information } from './pages/information/Information';
import { ArticlePage } from './pages/article-page/ArticlePage';
import { CompanyInfo } from './pages/company-info/CompanyInfo';

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <Routes>
          <Route path={'/'} element={<AboutUs />} />
          <Route path={'/contacts'} element={<Contacts />} />
          <Route path={'/information'}>
            <Route index element={<Information />} />
            <Route path={':id'} element={<ArticlePage />} />
          </Route>
          <Route path={'/company'}>
            <Route path={':id'} element={<CompanyInfo />} />
          </Route>
          <Route path={'*'} element={<div>Ошибка</div>} />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
