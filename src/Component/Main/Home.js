import { Link, browserHistory, IndexRoute, BrowserRouter as Router, Route, Switch,useLocation } from 'react-router-dom';
import React from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import './Home.css'
import Topbar from './TopBar'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { ThemeProvider } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import MediaCard from './Card'

const isMobile = window.innerWidth <= 500;

export default function Home(){ 

    const [loading,setloading] = useState(false)
    const [Data,setData] =  useState([])
    const category = [
        {name:'Business',value:'business'},
        {name:'Entertainment',value:'entertainment'},
        {name:'Health',value:'health'},
        {name:'Science',value:'science'},
        {name:'Sports',value:'sports'},
        {name:'Technology',value:'technology'}
    ];
    const search = useLocation().search;
    
    const country = new URLSearchParams(search).get('country')
    var countryname=''
    if (country===null) {
        countryname='us';
    } else {
        countryname = country;
    }
    const categoryname = new URLSearchParams(search).get('category')
    useEffect(()=>{
        
       async function GetData(){
            try {
                console.log(search);
                setloading(false)
                let data = await axios({
                    method:'get',
                    url:'http://newsapi.org/v2/top-headlines?country='+countryname[0]+countryname[1]+'&category='+categoryname+'&apiKey=e2b1a670aa6c406a821291c1350e7b90'
                    //url:'https://jsonplaceholder.typicode.com/users'
                }).then(({data})=>{
                    setData(data.articles)
                    //setData(data)
                    setloading(true)
                })
            } catch (error) {
                
            }
        }
        GetData()
    },[])
        return(
            <div>
                <Router browserHistory>
                {!loading && 
                    <div style={{width:'100%',height:'100vh',justifyContent:'center',display:'flex',alignItems:'center'}}>
                        <Loader
                            type="Audio"
                            color='red'
                            height={100}
                            width={100}
                    
                        />
                    </div> || 
                    
                    <div>
                        <Topbar/>
                        {/* {this.state.Data.map(data=>
                            <div>
                                <h1>{data.author}</h1>
                                <h2>{data.content}</h2>
                            </div>
                        )} */}
    
                            <div className="row">
                                <div className='column1'>
                                    <ul>
                                        <li className='subcat1'>
                                            Categories
                                        </li>
                                        {/* <li className="subcat1">
                                            Categories
                                        </li> */}
                                        
                                        {category.map(data=>
                                            <Link to={{pathname:"/?country="+countryname,search: "&category="+data.value}}><li onClick="window.location.href=window.location.href" className="subcat">{data.name}</li></Link>
                                        )}
                                    </ul>
                                </div>
                                
                                <div className='column2'>
                                    <div className='categoryname'>
                                        <h1>{categoryname} Information</h1>
                                    </div>
                                    <div className='category'>
                                    <Link to={{pathname:"/?country="+countryname,search: "&category=busniess"}}><div onClick="window.location.href=window.location.href" className='cat'>
                                            <p>Business</p>
                                        </div>
                                        </Link>
                                    <Link to={{pathname:"/?country="+countryname,search: "&category=entertainment"}}><div onClick="window.location.href=window.location.href" className='cat'>
                                            <p>Entertainment</p>
                                        </div></Link>
                                    <Link to={{pathname:"/?country="+countryname,search: "&category=health"}}><div onClick="window.location.href=window.location.href" className='cat'>
                                            <p>Health</p>
                                        </div></Link>
                                    <Link to={{pathname:"/?country="+countryname,search: "&category=science"}}><div onClick="window.location.href=window.location.href" className='cat'>
                                            <p>Science</p>
                                        </div></Link>
                                    <Link to={{pathname:"/?country="+countryname,search: "&category=sports"}}><div onClick="window.location.href=window.location.href" className='cat'>
                                            <p>Sports</p>
                                        </div></Link>
                                    <Link to={{pathname:"/?country="+countryname,search: "&category=technology"}}><div onClick="window.location.href=window.location.href" className='cat'>
                                            <p>Technology</p>
                                        </div></Link>
                                    </div>
                                        {Data.length===0?
                                        <div className='New'>
                                            <h1>Select any category to find the News</h1>
                                        </div>    
                                            :
                                        <div className='grid-container'>
                                            {Data.map(data=>
                                                <div className='grid-item'>
                                                    <MediaCard results = {JSON.stringify({
                                                        Url:data.urlToImage,
                                                        Name:data.source.name,
                                                        Title:data.title,
                                                        Weburl:data.url
                                                    })}/>
                                                </div>
                                            )}
                                        </div>
                                            }
                                </div>
                            </div>
                        </div>
                }
                </Router>
            </div>
        )
}