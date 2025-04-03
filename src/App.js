import BookDetails from './components/BookDetails/bookdetails';
import BookList from './components/BookList/BookList';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}> Book List </h1>

      <Routes>
        <Route path='/books'>
          <Route index element={<BookList />} />
          <Route path=":title" element={<BookDetails />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
