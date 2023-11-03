import Header from './Header';
import * as S from './styles';
import { FC } from 'react';

export const MainLayout: FC = ({ children }) => {
  return (
    <S.Layout>
      <S.Content>
        <Header />
        <S.MainContent>{children}</S.MainContent>
      </S.Content>
    </S.Layout>
  );
};
