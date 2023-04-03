import React, { lazy } from 'react';

// @ts-ignore @ts-expect-error
const Header = lazy(() => import('header/Header'));

function App() {
  return (
    <article>
      <React.Suspense fallback="Loading Header">
        <Header />
      </React.Suspense>
    </article>
  );
}

export default App;
