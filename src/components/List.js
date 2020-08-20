import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem'

class Listmodule extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            isloaded : false,
            counterlist:[],
            flag:0

        }
    }

    componentDidMount(){
        const url = 'https://hn.algolia.com/api/v1/search?tags=front_page' 
        fetch(url).then(res => res.json())
        .then(json => {
            this.setState({
                isloaded: true,
                items: json,
            })
        });

    }
    hideevent= (objectID) =>{
       var element = document.getElementById(objectID);
        element.parentNode.removeChild(element);        
    }
    upvotehandler= (objectID) =>{
        var count = localStorage.getItem(objectID);
        count = parseInt(count)+1
        localStorage.setItem(objectID,count);
        this.setState.flag=1;
        
    }
      
    
    render(){
        var { isloaded ,items } = this.state;
        
        if(!isloaded){
            return <div>Its Loading....</div>
        }
        else{
            items.hits.map(item =>
                this.state.counterlist.push({
                    "id" : item.objectID,
                    "counter": 0,
                })
            )
          
            return(
                
                <ListWrapper>
                    {items.hits.map(item => 
                        <ListItem {...item} key={item.objectID}  hideeventhandler={this.hideevent.bind(this,item.objectID)} upvotehandler={this.upvotehandler.bind(this,item.objectID)}/>
                    )}
                    <ListItem/>
                </ListWrapper>
            )
        }
    }
}

const ListWrapper = styled.ul `
    background-color: #F6F6EF;
    border-radius : 4px;
    margin-left : auto;
    margin-right : auto;
    margin-bottom : 20px;
    display : flex;
    flex-direction : column

`

export default Listmodule;