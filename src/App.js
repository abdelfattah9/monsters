import React from 'react'
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }))
  }

  handelChange = e => {
    this.setState({ searchField: e.target.value})
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()
      ))


    return (
      <div className='App'>
        
        <SearchBar 
        placeholder= 'Search...'
        handelChange={this.handelChange}
        />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
