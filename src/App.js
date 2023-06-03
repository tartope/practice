import './App.css';
import { HomePage } from './HomePage';
import { Login } from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Nav } from './Nav';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} >
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/login" exact={true} element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
