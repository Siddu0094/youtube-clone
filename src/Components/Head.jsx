import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/AppSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchquery, setsearchquery] = useState("");
  const [sugesstions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchcache=useSelector(store=>store.search)
  console.log(searchquery);


  /*
  {
  iphone:["iphone11","iphone 12"]
  }
  */
  
  useEffect(() => {
    // saving cache

    // getsearchsuggestions()
    // make an api call after every key press
    // but if the differnece between 2 api calls is less than 200ms decline the api call
    const timer = setTimeout(() => {
        if(searchcache[searchquery]){
            setsuggestions(searchcache[searchquery])
        }
        else{
            getsearchsuggestions();

        }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);

  /*
pressed key=i
render the compoenent
useeffect()
start timer and make api call after 200ms


//even before completing 2seconds we pressed another key stroke
pressed key =ip
rerender the component
useEffect()
start timer and make api call after 200ms
here timer starts again from0

*/

  const getsearchsuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = await data.json();
    console.log(json[1]);
    setsuggestions(json[1]);


    //update cache

    dispatch(cacheResults({
        [searchquery]:json[1]
    }))

  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex  col-span-1">
        <img
          onClick={() => {
            dispatch(toogleMenu());
          }}
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
          alt="menu"
          className="h-8 cursor-pointer"
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="logo"
        />
      </div>
      {/* search box */}
      <div className="col-span-10  px-10">
        <div>
          <input
            onFocus={() => {
              setshowsuggestions(true);
            }}
            onBlur={() => {
              setshowsuggestions(false);
            }}
            value={searchquery}
            onChange={(e) => {
              setsearchquery(e.target.value);
            }}
            className="px-5 py-2 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="search"
          />
          <button className="border border-gray-400 bg-gray-100 text-black px-5 py-2 rounded-r-full">
            Search
          </button>
        </div>
        {/* SUGGESTIONS */}
        {showsuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[480px] shadow-lg border border-gray-300">
            <ul>
              {sugesstions.map((item, index) => (
                <li
                  key={index}
                  className="px-2 py-2 shadow-lg hover:bg-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* usericon */}
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
