import { useMemo } from 'react';
import Header from './components/header';
import globalStyles from './global-style';

function App() {
  useMemo(() => {
    globalStyles();
  }, []);

  return <Header />;
}

export default App;
