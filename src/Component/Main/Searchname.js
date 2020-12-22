import React from 'react'
import {Link,browserHistory,IndexRoute,BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const SearchName = (props) => {
    
//   console.log(props);
  const Country = [
      {name:'Argentina',value:'ar'},
      {name:'Australia',value:'au'},
      {name:'Austria',value:'at'},
      {name:'Belgium',value:'be'},
      {name:'Brazil',value:'br'},
      {name:'Bulgaria',value:'bg'},
      {name:'Canada',value:'ca'},
      {name:'China',value:'cn'},
      {name:'Colombia',value:'co'},
      {name:'Cuba',value:'cu'},
      {name:'Czech Republic',value:'cz'},
      {name:'Egypt',value:'eg'},
      {name:'France',value:'fr'},
      {name:'Germany',value:'de'},
      {name:'Greece',value:'gr'},
      {name:'Hong Kong',value:'hk'},
      {name:'Hungary',value:'hu'},
      {name:'India',value:'in'},
      {name:'Indonesia',value:'id'},
      {name:'Ireland',value:'ie'},
      {name:'Israel',value:'il'},
      {name:'Italy',value:'it'},
      {name:'Japan',value:'jp'},
      {name:'Latvia',value:'lv'},
      {name:'Lithuania',value:'lt'},
      {name:'Malaysia',value:'my'},
      {name:'Mexico',value:'mx'},
      {name:'Morocco',value:'ma'},
      {name:'Netherlands',value:'nl'},
      {name:'New Zealand',value:'nz'},
      {name:'Nigeria',value:'ng'},
      {name:'Norway',value:'no'},
      {name:'Philippines',value:'ph'},
      {name:'Poland',value:'pl'},
      {name:'Portugal',value:'pt'},
      {name:'Romania',value:'ro'},
      {name:'Russia',value:'ru'},
      {name:'Saudi Arabia',value:'sa'},
      {name:'Serbia',value:'rs'},
      {name:'Singapore',value:'sg'},
      {name:'Slovakia',value:'sk'},
      {name:'Slovenia',value:'si'},
      {name:'South Africa',value:'za'},
      {name:'South korea',value:'kr'},
      {name:'Sweden',value:'se'},
      {name:'Switzerland',value:'ch'},
      {name:'Taiwan',value:'tw'},
      {name:'Thailand',value:'th'},
      {name:'Turkey',value:'tr'},
      {name:'UAE',value:'ae'},
      {name:'Ukraine',value:'ua'},
      {name:'United Kingdom',value:'gb'},
      {name:'United States',value:'us'},
      {name:'Venuzuela',value:'ve'},
  ]
    const new_Data=[]
    Country.forEach(element => {
        if(element.name[0]===props.results[0]){
            new_Data.push({name:element.name,value:element.value})
        }
    });
    // new_Data.forEach(element => {
    //     if(element!==props.results){
    //         new_Data.pop(element)
    //     }
    // });
    // console.log(new_Data);
    const options = new_Data.map(data=>
            <Link  to={{pathname:"/",search: "?country="+data.value}}>
                <li>
                    <div onClick="window.location.href=window.location.href">
                        <h1>{data.name}</h1>
                    </div>
                </li>
            </Link>
        )
//   const new1 = country.map(data=>
//         console.log(data,data[0],props.results,data[0]===props.results[0])

//     )
  return (
        <Router browserHistory>
            <ul>{options}</ul>
        </Router>
  )
}

export default SearchName