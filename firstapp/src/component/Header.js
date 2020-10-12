import React,{Component} from 'react';
import './Header.css';

class Header extends Component
{
    constructor()
    {
        super();

        this.state={
            title:'React App',
            keyword:'User Input Here'
        }
    }

    inputChange= (event) =>{

        console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:"User Input Here"})
    }
    render(){
        return (
            <div>
                <header>
                <center>
                    <h1>{this.state.title}</h1>
                    <input onChange={this.inputChange}/>
                    <h3 className="logo">{this.state.keyword}</h3>
                </center>
                </header>
                <hr></hr>
            </div>
        )
    }
}
export default Header;