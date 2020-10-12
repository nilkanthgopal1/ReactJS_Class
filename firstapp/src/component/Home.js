import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsList from './NewsList';

class Home extends Component{
    constructor(){
        super();

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){

        const output=this.state.news.filter((data)=>{
            return data.title.indexOf(keyword)>-1
        })

        this.setState({filtered:output})
    }
    render(){
        console.log(this.state.news)
        return(
            <div>
              <Header/>
              <NewsList newsdata={this.state.filtered}/>
              <Footer month="Sep" year="2020"/>
            </div>
        )
    }
}
 
export default Home;
