import type { utilsProps } from '@/components/blocks/utils/types';
import { StaticImageData } from 'next/image';

export type imgFigureProps = {
  src: string | StaticImageData;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  borderradius?: string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  height?: number | `${number}`;
  width?: number | `${number}`;
};

export type FigureProps = utilsProps & {
  img: imgFigureProps;
  caption?: utilsProps['children'] | string;
};
