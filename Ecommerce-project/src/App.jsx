import {Routes ,Route} from 'react-router'
import { HomePages } from './pages/HomePages';
import { CheckoutPages } from './pages/checkout/CheckoutPages';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/Tracking';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css'

function App() {
  return (
    <Routes>
      {/*<Route path='/' element={<HompePages />}></Route> this same of below*/}
      <Route index element={<HomePages />} />
      <Route path='checkout' element={<CheckoutPages />}></Route>
      <Route path='orders' element={<Orders />}></Route>
      <Route path='tracking' element={<Tracking />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App
