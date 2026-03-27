import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/AppSlice";
import { cacheResults } from "../utils/searchSlice";
import { setresults } from "../utils/VideoSlice";
import { YOUTUBE_SEARCH_API, SEARCH_VIDEOS_API } from "../utils/constants";

const Head = () => {
  const [searchquery, setSearchquery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  // Debounced API call for suggestions
  useEffect(() => {
    if (searchquery.trim() === "") {
  setShowSuggestions(false);
  return;
 }
    if (!searchquery) return;

    const timer = setTimeout(() => {
      if (searchCache[searchquery]) {
        setSuggestions(searchCache[searchquery]);
      } else {
        getSearchSuggestions();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchquery]);

  // Fetch suggestions
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = await data.json();
    setSuggestions(json[1] || []);
    dispatch(
      cacheResults({
        [searchquery]: json[1] || [],
      })
    );
  };

  // Handle search (for button or Enter key)
  const handleSearch = async (query) => {
    if (!query) return;

    const data = await fetch(SEARCH_VIDEOS_API + query);
    const json = await data.json();
    dispatch(setresults(json.items || []));
    setShowSuggestions(false);
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = (item) => {
    setSearchquery(item);
    handleSearch(item);
  };

  return (
   <div className="grid grid-cols-12 p-5 m-2 shadow-lg">

  {/* Logo */}
  <div className="flex col-span-2 sm:col-span-1 items-center">
    <img
      onClick={() => dispatch(toogleMenu())}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
      alt="menu"
      className="h-8 cursor-pointer"
    />
    <img
      className="h-8 mx-2 hidden sm:block"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
      alt="logo"
    />
  </div>

  {/* Search Box */}
  <div className="col-span-8 px-4 relative">
    <input
      value={searchquery}
      onChange={(e) => setSearchquery(e.target.value)}
      onFocus={() => setShowSuggestions(true)}
      className="px-5 py-2 w-full sm:w-4/5 border border-gray-400 rounded-l-full"
      placeholder="Search"
    />
    <button
      onClick={() => handleSearch(searchquery)}
      className="border border-gray-400 bg-gray-100 px-5 py-2 rounded-r-full"
    >
      Search
    </button>

    {showSuggestions && suggestions.length > 0 && (
      <div className="absolute bg-white py-2 px-5 w-full sm:w-4/5 shadow-lg border border-gray-300 z-10">
        <ul>
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-300 cursor-pointer"
              onMouseDown={() => handleSuggestionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul> 
      </div>
    )}
  </div>

  {/* User Icon */}
  <div className="col-span-2 flex justify-end">
    <img
      className="h-8"
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      alt="user"
    />
  </div>

</div>

  );
};

export default Head;
