import { useRef } from "react";

import { useLoadedLocation } from "@app/common/WrapperRoute";
import { useAppSelector } from "@app/store";
import { generateInitialPropsKey } from "@app/util/preLoad";

export const useGetInitialProps = (pagePath: string) => {
  const validPropsRef = useRef<any>();
  const routerData = useAppSelector((state) => state.client.clientProps.data)
  const loaded = useLoadedLocation();
  const propsKey = generateInitialPropsKey(loaded?.location.pathname || "", loaded?.query || new URLSearchParams());
  const props = routerData[propsKey];
  validPropsRef.current = pagePath === loaded?.location.pathname ? props : validPropsRef.current;
  return validPropsRef.current;
};
