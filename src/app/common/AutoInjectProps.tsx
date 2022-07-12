import { memo } from 'react';

import { useGetInitialProps } from '@app/hooks/useGetInitialProps';

import type { ComponentType, LazyExoticComponent } from 'react';

export const AutoInjectProps = (
  Component: LazyExoticComponent<ComponentType<Record<string, unknown>>>,
  path: string,
) => {
  const MemoComponent = memo(Component);

  const RouterComponentWithProps = () => {
    const props = useGetInitialProps(path);
    return <MemoComponent {...props} />;
  };

  return RouterComponentWithProps;
};
