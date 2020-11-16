import './base.scss';
import { Route, Router } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/products';
import footer from './components/footer';
import Video from './components/video';
import New from './components/news';


const App = () => {
  return (
    <div className='App'>
      <Header />
      {/* <Header />
      <Hero />
      <Products /> */}
      <Route exact path='/' component={Hero} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/footer' component={footer} />
      <Route exact path='/video' component={Video} />
      <Route exact path='/new' component={New} />
    </div>
  );
};

export default App;
