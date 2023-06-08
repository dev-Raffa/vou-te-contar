import { Article } from '@/components/blocks/contents/article';
import { Header } from '@/components/blocks/contents/header';
import { Footer } from '@/components/blocks/contents/footer';
import type { cardProps } from './types';

export const Card = ({ body, footer, header, keyid, ...rest }: cardProps) => {
  return (
    <Article id={keyid} key={keyid} {...rest}>
      {header && (
        <Header
          key={`header-card-${keyid}`}
          height="7.5rem"
          width="100%"
          alignx={header.alignx}
          aligny="center"
          padding="0 5%"
        >
          {header.content}
        </Header>
      )}

      {body}

      {footer && (
        <Footer alignx="center" aligny="center" height="10px" width="100%">
          {footer}
        </Footer>
      )}
    </Article>
  );
};
