import { SectionFlex } from '@/components/containers/section';
import { Card } from '..';
import { cardGroup } from '../types';

export const CardGroup = ({ id, height, itens, ...args }: cardGroup) => {
  return (
    <SectionFlex
      direction="column"
      height={itens[0].height}
      alignx="left"
      width="80vw"
      position="relative"
    >
      <SectionFlex position="absolute" height={height} {...args}>
        {itens.map((item, index) => {
          return <Card key={`group-card-${id}-item-${index}`} {...item} />;
        })}
      </SectionFlex>
    </SectionFlex>
  );
};
