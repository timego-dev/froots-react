import { FC } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { MAIN_ROUTES, ROUTES } from '../constants';
import { MainLayout } from '../layouts';

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        {MAIN_ROUTES.map(({ path, element: C }) => (
          <Route
            path={path}
            key={path}
            element={
              <MainLayout>
                <C />
              </MainLayout>
            }
          />
        ))}
        <Route path="*" element={<Navigate to={ROUTES.ALBUM.LIST} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
