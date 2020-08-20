import React, { Component } from "react";
import {tablet} from '../styles/mediaqueries'
import Listmodule from './List'
import styled from 'styled-components'




class Data extends Component{

    
    
    render(){
            return(
                <div className="data-style">
                    <Wrapper>
                        <Listmodule/>
                    </Wrapper>
                </div>
            
                );
        }

    }


const Wrapper = styled.div `
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    overflow: hidden;
    padding-bottom: 200px;

    ${tablet} {
        width : 96%;
    }

`

export default Data