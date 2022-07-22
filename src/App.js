import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

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
      <Layout
        header={
          <Header>
            <Searchbar onSearch={term => this.searchHandler(term)} />
          </Header>
        }
        menu={<Menu />}
        content={
          this.state.loading 
            ? <LoadingIcon />
            : <Hotels hotels={this.state.hotels} />
        }
        footer={
          <Footer />
        }
      />
    );
  }
}

export default App;