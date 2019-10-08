import React,{useState} from 'react';
import { SearchBox } from './styles';

function SearchInput(props){
    const [searchText,setSearchText]=useState(props.searchText);
    function keyDownHandler(e){
        if(e.key==="Enter"){
            window.location.href="/search?q="+searchText
        }
    }
    return <SearchBox value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} onKeyDown={keyDownHandler}/>;
}

export default SearchInput;