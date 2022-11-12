import './employees-list-item.css';
import {Component} from 'react';

class EmployeesListItem extends Component {
    //Створення конструктора
    constructor (props) {
        super(props);
        //Створення стану
        this.state = {
            increase: false,
            rise: false
        }
    }

    //Cтворення функції
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onRise = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    }

    //Рендер
    render () {
        const {name, salary, onDelete} = this.props;
        const {increase, rise} = this.state;
       
        let className = "list-group-item d-flex justify-content-between";

        if (increase) {
            className += ' increase';
        }

        if (rise) {
            className += ' like';
        }
        return (
            <li className={className}>
                <span className="list-group-item-label"
                onClick={this.onRise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}
 
export default EmployeesListItem;