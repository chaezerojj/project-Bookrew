import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import Booklist from './pages/booklist/Booklist';
import BoardDetail from './components/Board/BookBoardDetail';
import BoardForm from './components/Board/BookBoardForm';
import FreeBoard from './pages/board/FreeBoard';
import BookBoard from './pages/board/BookBoard';
import FreeBoardDetail from './components/Board/FreeBoardDetail';
import BookBoardDetail from './components/Board/BookBoardDetail';
import FreeBoardForm from './components/Board/FreeBoardForm';
import BookBoardForm from './components/Board/BookBoardForm';

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
          <Route path="/bookrew/freeboard" element={<FreeBoard />} />
          <Route path="/bookrew/bookboard" element={<BookBoard />} />
          <Route path="/bookrew/freeboard/:id" element={<FreeBoardDetail />} />
          <Route path="/bookrew/bookboard/:id" element={<BookBoardDetail />} />
          <Route path="/bookrew/freeboard/create" element={<FreeBoardForm />} />
          <Route path="/bookrew/bookboard/create" element={<BookBoardForm />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
