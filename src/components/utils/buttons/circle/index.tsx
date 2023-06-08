import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonCircle = ({ children, arialabel, ...rest }: buttonProps) => {
  return (
    <S.Button variant="circle" aria-label={arialabel} {...rest}>
      {children}
    </S.Button>
  );
};
