import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Auth';
import Admin from './components/Admin';
import React,{ lazy, Suspense} from 'react';
import HomeComponent from './components/Home';
import NavbarComponent  from './components/Navbar';
import NoMatchComponent from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import UserComponent from './components/Users';
import ProductsComponent from './components/Products';
import UserDetails from './components/Userdetails';
import Profile from './components/Profile';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Newproducts } from './components/Newproducts';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';

// eslint-disable-next-line
const lazyAbout = lazy(() => import('./components/About'));

function App() {
  return (
    <AuthProvider>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/about'
          element={
            <Suspense fallback='Loading...'>
              <lazyAbout/>
            </Suspense>
          }/>
        <Route path='/order-summary' element={<OrderSummary/>}/>
        <Route path='/products' element={<ProductsComponent/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<Newproducts/>}/>
        </Route>
        <Route path='/users' element={<UserComponent/>}>
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path='/profile' element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NoMatchComponent/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
