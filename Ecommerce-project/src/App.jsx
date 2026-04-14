import {Routes ,Route} from 'react-router'
import { HomePages } from '../pages/HomePages';
import { CheckoutPages } from '../pages/CheckoutPages';
import './App.css'

function App() {
  return (
    <Routes>
      {/*<Route path='/' element={<HompePages />}></Route> this same of below*/}
      <Route index element={<HomePages />} />
      <Route path='checkout' element={<CheckoutPages />}></Route>
    </Routes>
  )
}

export default App
