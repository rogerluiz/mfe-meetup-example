import React from 'react';

const useDynamicScript = (args: { url: any }) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!args.url) {
      return;
    }

    const element = document.createElement('script');

    element.src = args.url;
    element.type = 'text/javascript';
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      // eslint-disable-next-line no-console
      console.info(`Dynamic Script Loaded: ${args.url}`);
      setReady(true);
    };

    element.onerror = () => {
      // eslint-disable-next-line no-console
      console.error(`Dynamic Script Error: ${args.url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      // eslint-disable-next-line no-console
      console.info(`Dynamic Script Removed: ${args.url}`);
      document.head.removeChild(element);
    };
    }, [args.url]);

  return {
    ready,
    failed,
  };
};

interface MfeProps {
  url: string,
  module: string;
  scope: string;
}

export function Mfe({url, module, scope}: MfeProps) {
  const { ready, failed } = useDynamicScript({
    url,
  });

  if (!url) {
    return <p>Sistema não especificado</p>;
  }

  if (!ready) {
    return <p />;
  }

  if (failed) {
    return <p>Falha ao carregar script dinâmico</p>;
  }
  
  return null;

//  const Component = React.lazy(loadComponent());
//
//  return (
//    <React.Suspense fallback={fallback}>
//      <Component id={id} emissor={emissor} portal={portal} />
//    </React.Suspense>
//    );
}