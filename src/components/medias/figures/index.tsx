import Image from 'next/image';
import { BlockFigure } from '@/components/blocks/utils/figure';
import type { FigureProps } from './types';

export const Figure = ({ img, caption, ...args }: FigureProps) => {
  return (
    <BlockFigure {...args}>
      <Image
        {...img}
        quality={img.quality ? img.quality : 75}
        style={{
          borderRadius: img.borderradius,
          objectFit: img.fit
        }}
      />

      <figcaption style={{ marginTop: '10px' }}>{caption}</figcaption>
    </BlockFigure>
  );
};
