import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import Characters from './components/Characters';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
