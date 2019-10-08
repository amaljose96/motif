import React,{useState} from 'react';
import { HomeContainer, MotifHeading, SongEntryLabel,SongEntryHelperText, SongEntryInput } from './styles';
import SearchInput from '../Search/SearchInput';

function Home(props){
    return <HomeContainer>
        <MotifHeading>MotiF</MotifHeading>
        <SongEntryLabel>Enter the name of the song to begin</SongEntryLabel>
        <SongEntryHelperText>or the artist or the chord progression or the tempo, whatever comes to your mind.</SongEntryHelperText>
        <SearchInput/>
    </HomeContainer>;
}

export default Home;