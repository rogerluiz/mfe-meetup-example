/// <reference types="react-scripts" />
/// <reference types="react" />

declare module 'header/Header' {
  const HeaderApp: React.ComponentType;

  export default HeaderApp;
}

declare module 'footer/Footer' {
  const FooterApp: React.ComponentType;

  export default FooterApp;
}

declare module 'cart/CardGrid' {
  import { CardGridProps } from 'cart/CardGrid';
  const CardApp: React.ComponentType<CardGridProps>;

  export default CardApp;
}

declare module 'cart/useStore' {
  import useStore from 'cart/useStore';

  // const useStore: UseBoundStore<StoreApi<State>>

  export default useStore;
}
