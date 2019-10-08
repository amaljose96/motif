import React,{useState} from 'react';
import queryString from 'query-string';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import {SearchContainer} from './styles'

function Search(props){
    return <SearchContainer>
        <SearchInput searchText={queryString.parse(props.location.search).q}/>
        <SearchResults/>
    </SearchContainer>
}

export default Search;