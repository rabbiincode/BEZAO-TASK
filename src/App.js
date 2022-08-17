import Blog from './component/blog/Blog';
import FeedBack from './component/feedBack/FeedBack';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Menu from './component/menu/Menu';

function App() {

  return (
    <div className="App w-full">
      <Header />
      <Home />
      <Menu />
      <FeedBack />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
