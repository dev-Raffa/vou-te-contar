import { MainFlex } from '@/components/containers/main';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <MainFlex
      width="80vw"
      height="75vh"
      alignx="center"
      aligny="center"
      direction="column"
    >
      {children}
    </MainFlex>
  );
};
