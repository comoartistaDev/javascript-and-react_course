import { Component } from 'react';

import AppInfo from '../app-info/app-info'; 
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


//клас
// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 27, 
//       text: 'increase age',
//       jobTitle: ''
//     }
//   } 

// //метод
//   nextYear =  () => {
//     this.setState(state => ({
//         years: state.years + 1
//       }))
//   }

//   commitInputChanges = (e, color) => {
//     console.log(color);
//     this.setState({
//       jobTitle: e.target.value
//     })
//   }

//   //рендер пропса
//   render() {
//     const {name, surname, link} = this.props;
//     const {jobTitle, years} = this.state;
//     return (
//       <div>
//       <button onClick={this.nextYear}>{this.state.text}</button>
//         <h1>My name is {name}, surname - {surname},
//           age {years}, 
//           job title - {jobTitle}
//         </h1>
//         <a href={link}>My profile</a>
//         <form>
//           <span>Enter the job title</span>
//           <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
//         </form>
//       </div>
//     ) 
//   }
// }

//вивід епп

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {name: 'John K.', salary: 800, increase: false, id: 1},  
        {name: 'Alex M.', salary: 3000, increase: true, id: 2},
        {name: 'Carl W.', salary: 500, increase: false, id: 3},
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name, 
      salary,
      increase: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}/>
          <EmployeesAddForm onAdd={this.addItem}/>
  
          {/* <WhoAmI name='Karl' surname='Gerar' link="facebook.com"/> */}
  
  
      </div>
    );
  }
}

export default App;

