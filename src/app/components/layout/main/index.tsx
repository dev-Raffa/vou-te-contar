import { MainFlex } from '@/components/containers/main';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <MainFlex width="70vw" height="75vh" alignx="center" aligny="center">
      {children}
    </MainFlex>
  );
};
