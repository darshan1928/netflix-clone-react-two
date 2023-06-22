import Row from "./components/Row";
import requests from "./requests";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
          <Nav/>
          <Banner/>

            <Row isLargeRow={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

            <Row title="Netflix Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
