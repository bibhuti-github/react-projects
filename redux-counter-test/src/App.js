
import './App.css';
import Counter from './containers/Counter/counter'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Counter />
    </div>
  );
}

export default App;
