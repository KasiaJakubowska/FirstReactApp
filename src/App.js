import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';

class App extends Component { 
  hotels = [
    {
      id: 1,
      name: 'Pod akacjami',
      city: 'Warszawa',
      rating: 8.3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
      image: ''
    },
    {
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: 8.8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
      image: ''
    }
  ];
  state = {
    hotels: [],
    loading: true,
  };

  searchHandler(term) {
    const hotels = [...this.hotels]
      .filter(x => x.name
          .toLowerCase()
          .includes(term.toLowerCase()));
    this.setState({ hotels });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ 
          hotels: this.hotels, 
          loading: false 
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={term => this.searchHandler(term)}/>
        <Menu />
        {this.state.loading 
          ? <LoadingIcon />
          : <Hotels hotels={this.state.hotels} />
        }
      </div>
    );
  }
}

export default App;