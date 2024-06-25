import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import Booklist from './pages/booklist/Booklist';
import Board from './pages/board/Board';
import BoardDetail from './components/Board/BoardDetail';
import BoardForm from './components/Board/BoardForm';

function App() {
  // const [app, setApp] = useState([]);
  // useEffect(() => {
  //   fetch("/api/bookrew")
  //     .then((res) => {return res.json()})
  //     .then((data) => {setApp(data)})
  // }, [])
  return (
    <>

      <Router>
        {/* 헤더 네비바 */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookrew/booklist" element={<Booklist />} />
          <Route path="/bookrew/board" element={<Board />} />
          <Route path="/bookrew/board/:id" element={<BoardDetail />} />
          <Route path="/bookrew/board/create" element={<BoardForm />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
