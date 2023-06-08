import * as themeTypes from '@/types/theme';
import * as layoutTypes from '@/types/layouts';
import { contentArticleProps } from '@/components/blocks/contents/article/type';
export type cardHeader = {
  alignx: layoutTypes.alignX;
  color?: keyof themeTypes.colors;
  content: layoutTypes.children;
};

export interface cardProps extends contentArticleProps {
  keyid: string;
  header?: cardHeader;
  body?: layoutTypes.children;
  footer?: layoutTypes.children;
}
