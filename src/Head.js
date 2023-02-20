import React, { useEffect, useState } from 'react';
import search from './utils/search.png';
import user from './utils/user.png';
import { toggleSideBar } from './utils/appSlice';
import { Link } from 'react-router-dom';
import { Youtube_Suggestion } from './utils/constants';
import { useDispatch,useSelector } from 'react-redux';
import { cacheSearch } from './utils/searchSlice';

export const Head = () => {
    const [searchText,setSearchText] = useState("");
    const [suggestion,setSuggestion] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const searchCache = useSelector((store)=>store.search);

    const searchVideos = async() =>{
        console.log(searchText);
        if(searchCache[searchText]){
            console.log(searchCache[searchText]);
            setSuggestion(searchCache[searchText])
        }
        else{
            const data = await fetch(Youtube_Suggestion+searchText);
            const json = await data.json();
            console.log(json[1]);
            setSuggestion(json[1]);
            dispatch(cacheSearch({
                [searchText]:json[1]
            }))
        }
        
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            searchVideos();
        },400);

        return ()=>{
            clearTimeout(timer);
        }
    },[searchText])

  return (
    <div>
        <div className="grid grid-flow-col p-4 shadow-lg">
        <div className="flex col-span-2">
            <img 
            alt="menu"
            className='h-10 cursor-pointer'
            onClick={()=> dispatch(toggleSideBar())}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="/>

            <Link to="/">
                <img
                alt="logo"
                className='h-10'
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"/>
            </Link>
        </div>

        <div className="col-span-10 px-10">
            <input 
            type="text" 
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            placeholder='search'
            value={searchText}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            onChange={
                (event)=>{
                    setSearchText(event.target.value)
                }}/>
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
           </button>
           {showSuggestions && <div className="fixed bg-white w-[32.5rem] rounded-lg border border-gray-100 p-3 shadow-lg">
                <ul>
                    {
                        suggestion.map((suggestion)=>{
                            return <li key={suggestion} className="py-2 px-3 hover:bg-gray-200 text-ellipsis overflow-hidden ..."> 🔍 {suggestion}</li>
                        })
                    }
                </ul>
            </div>}
        </div>
        <div className="col-span-1 right-0">
            <img alt="user" className='h-8' 
            src={user}
            />
        </div>
        
        </div>
        
        
    </div>
  )
}
