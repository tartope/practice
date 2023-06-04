import './App.css';
import { HomePage } from './HomePage';
import { Login } from './Login';
// Import BrowserRouter, Routes and Route to create routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import QueryClient and QueryClientProvider to grab API
import { QueryClient, QueryClientProvider } from 'react-query';
// Import Nav to create navigation Links
import { Nav } from './Nav';

// Create a new QueryClient and place in variable
const queryClient = new QueryClient();

// Wrap your QueryClientProvider around components that you want to read (share) from the Query cache; pass in your client attribute
// Wrap your components that you need routing in BrowserRouter
// Wrap your components that need routes/paths in Routes
// Give each Route a path, exact, and element

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
