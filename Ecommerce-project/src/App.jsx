import {Routes ,Route} from 'react-router'
import { HompePages } from '../pages/HomePages'
import './App.css'

function App() {
  return (
    <Routes>
      {/*<Route path='/' element={<HompePages />}></Route> this same of below*/}
      <Route index element={<HompePages />} />
      <Route path='checkout' element={<div>Vels Test page </div>}></Route>
    </Routes>
  )
}

export default App
