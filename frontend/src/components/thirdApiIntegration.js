import React, {Component} from 'react';
import axios from 'axios';
const options = {
    method: 'GET',
    url: 'https://extract-news.p.rapidapi.com/v0/article',
    params: {
      url: 'https://www.theverge.com/2020/4/17/21224728/bill-gates-coronavirus-lies-5g-covid-19'
    },
    headers: {
      'X-RapidAPI-Key': 'af2d38542fmshe707bf64f0aa221p1b4cbcjsnd7eb98f2f093',
      'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
    }
  };
  
class ThirdApiIntegration extends Component{
    
    
    render() {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        return(
            <h1>API</h1>
        );
    }
}

export default ThirdApiIntegration;