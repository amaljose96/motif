import React from 'react';
import {MainViewContainer} from './styles'

function MainView(props){
    return <MainViewContainer>{props.children}</MainViewContainer>
}
export default MainView;