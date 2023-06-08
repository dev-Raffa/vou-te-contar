import * as typeTheme from '@/types/theme';
import * as layoutTypes from '@/types/layouts';

type variant =
  | 'default'
  | 'outline'
  | 'circle'
  | 'circle-outline'
  | 'switch'
  | 'text';

interface buttonStyle {
  color?: keyof typeTheme.colors;
  bgcolor: keyof typeTheme.colors | 'transparent';
  height: keyof typeTheme.height;
  minWidth?: string;
  hover?: boolean;
  animation?: layoutTypes.animation;
}

export interface buttonProps extends buttonStyle {
  id: string;
  arialabel?: string;
  onClick: () => void;
  children: layoutTypes.children;
}

export interface buttonStyleProps extends buttonStyle {
  variant: variant;
}
