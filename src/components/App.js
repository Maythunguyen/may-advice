import React from 'react';
import axios from 'axios';
import "../App.css";

class App extends React.Component {

    state = {
        advice: ""
    }

    componentDidMount() {
        this.fetchAdvice();
        
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice: advice });

            })
            .catch((error) => {
                console.error(error);

            });

    }
    render(){
        const { advice } = this.state;
        return (

            <div className='app'>
                <div className='card'>
                    <div className='heading'><h1>{advice}</h1></div>
                    <div>
                        <button className="button-52" onClick={this.fetchAdvice}>
                            GIVE ME ADVICE
                        </button>
                    </div>
                </div>
            </div>
            
          )
    }
  
}


export default App;

