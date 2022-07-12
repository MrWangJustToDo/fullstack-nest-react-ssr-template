
import { allRoutes } from '@app/router/routes';

import { LoadingBar } from './LoadingBar';
import { RenderMatch } from './RenderMatch';
import { WrapperErrorCatch } from './WrapperCatch';
import { WrapperLang } from './WrapperLang';
import { WrapperLoading } from './WrapperLoading';
import { WrapperRoute } from './WrapperRoute';

export const App = () => {
  return (
    <WrapperLang>
      <WrapperLoading>
        <WrapperRoute routes={allRoutes} LoadingBar={LoadingBar}>
          <WrapperErrorCatch>
            <RenderMatch />
          </WrapperErrorCatch>
        </WrapperRoute>
      </WrapperLoading>
    </WrapperLang>
  );
};
