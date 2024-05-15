import './assets/css/App.css'
import {Header} from './sections/Header'
import {Main} from './sections/Main'
import {Footer} from './sections/Footer'
import { Login } from './sections/Login';
import Router from './components/Router';

const appRoutes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/home',
    component: Main
  }
];


function App() {

  return (
    <Router routes={appRoutes} defaultComponent={Login} />
  )
}

export default App
