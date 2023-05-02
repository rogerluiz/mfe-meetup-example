import { useEffect } from 'react';
import Footer from './components/footer';
import globalStyles from './global-style';

function App() {
  useEffect(() => {
    globalStyles();
  }, []);

  return <Footer />;
}

export default App;
