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
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      {/* Hamburger & Logo */}
      <div className="flex col-span-1">
        <img
          onClick={() => dispatch(toogleMenu())}
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
          alt="menu"
          className="h-8 cursor-pointer"
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_(2015-2017).svg"
          alt="logo"
        />
      </div>

      {/* Search Box */}
      <div className="col-span-10 px-10 relative">
        <input
          type="text"
          value={searchquery}
          onChange={(e) => setSearchquery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(searchquery);
          }}
          className="px-5 py-2 w-1/2 border border-gray-400 rounded-l-full"
          placeholder="Search"
        />
        <button
          onClick={() => handleSearch(searchquery)}
          className="border border-gray-400 bg-gray-100 text-black px-5 py-2 rounded-r-full"
        >
          Search
        </button>

        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white py-2 px-5 w-1/2 shadow-lg border border-gray-300 z-10">
            <ul>
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onMouseDown={() => handleSuggestionClick(item)}
                  className="px-2 py-2 hover:bg-gray-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* User Icon */}
      <div className="col-span-1">
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
