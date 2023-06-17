import { useRef, useState, useEffect } from "react"
import get from "axios"
import Youtube from "react-youtube"

function MovieList({ genreId, genre }) {
  const [movies, setMovies] = useState([])
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const elementRef = useRef(null);

  const BASE_URL = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    get("https://api.themoviedb.org/3/discover/movie?api_key=a599bc64ef2a5e72a74993c70332643e&with_genres=" + genreId)
      .then((output) => {
        setMovies(output.data.results)
      })
      .catch((error) => {
        alert(error)
      })
  }, [genreId]);

  const getDetails = (movie) => {
    get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAeywCtUmvsuYfRVuuPUijpgt3G-Gmin_o&q=${encodeURIComponent(movie.title)} trailer`)
      .then((response) => {
        if (response.data.items.length > 0) {
          const videoId = response.data.items[0].id.videoId
          setId(videoId)
          setData(movie)
        }
      })
      .catch((error) => {
        alert(error)
      })

  }

  useEffect(() => {
    const addWheelEventListener = () => {
      if (elementRef.current) {
        elementRef.current.addEventListener('wheel', handleWheel);
      }
    };

    const handleWheel = (event) => {
      event.preventDefault();
      elementRef.current.scrollBy({
        left: event.deltaY < 0 ? -100 : 100,
      });
    };

    addWheelEventListener();

    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  });

  return (
    <div style={{ marginLeft: 20 }}>
      <h3 style={{ color: "white" }}>{genre}:</h3>
      <div className="display" ref={elementRef} style={{ display: "flex", width: "100vw", overflow: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          
          <div style={{ display: "flex", flexDirection: "row", marginLeft: -20 }}>
            <div style={{ display: "flex", flexWrap: "nowrap", padding: "10px" }}>
              {movies.map((i) => {
                return (
                  <div key={i.id} style={{ minWidth: "18rem", margin: 10, }}>
                    <img className="card-img-top" onClick={() => { getDetails(i) }} src={`${BASE_URL}${i.poster_path}`} alt={i.title} />
                    <div className="card-body" style={{ display: "flex", background: "black", marginTop: 10 }}>
                      <p className="card-text display" style={{ color: "white", fontWeight: "bold", height: 45, textAlign: "center", overflow: "scroll" }}>{i.overview}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {id && (
        <div style={{ display: "flex" }}>
          <Youtube videoId={id} />
          <div style={{ color: "white", margin: 30 }}>
            <h2>{data.title}</h2>
            <p style={{ width: "60vw", marginTop: 30 }}>{data.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList