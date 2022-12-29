import React from 'react';
import logo from './logo.svg';
import { AuthProvider } from './components/Auth';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.js';
// import { About } from './components/About.js';
import { Navbar } from './components/Navbar.js';
import { OrderSummary } from './components/OrderSummary.js';
import { NoMatch } from './components/NoMatch';
import { RequireAuth } from './components/RequireAuth';
import { Products } from './components/Products.js';
import { New } from './components/New';
import { Featured } from './components/Featured';
import { Users } from './components/Users';
import { UserDetail } from './components/UserDetail';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { Memo } from './components/Memo';
import { Login } from './components/Login';
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <>
      <AuthProvider>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
          <Route path='/order-summary' element={<OrderSummary />}></Route>
          <Route path='/products' element={<Products />}>
            <Route index element={<Featured />} />
            <Route path='featured' element={<Featured />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path='*' element={<NoMatch />} />
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetail />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='memo' element={<Memo />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </>

  );
}

export default App;
