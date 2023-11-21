import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainLayout } from './components/main-layout/MainLayout';
import { AboutUs } from './components/pages/about-us/AboutUs';
import { Contacts } from './components/pages/contacts/Contacts';

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <Routes>
          <Route path={'/'} element={<AboutUs />} />
          <Route path={'/contacts'} element={<Contacts />} />
          <Route path={'/information'} element={<div>Регистрация</div>} />
          <Route path={'/users'} element={<div>Пользователи</div>} />
          <Route path={'/post'} element={<div>Новая статья</div>} />
          <Route path={'/post/:post_id'} element={<div>Статья</div>} />
          <Route path={'*'} element={<div>Ошибка</div>} />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
