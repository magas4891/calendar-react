import React from 'react';
import Day from './Day';

Date.prototype.daysInMonth = function() {
    return new Date(this.getFullYear(), this.getMonth()+1, 0).getDate();
}

Date.prototype.firstDayWeekDay = function() {
    let temp = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
    return (temp == 0) ? 7 : temp
}

Date.prototype.getNameOfMonth = function() {
    let months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                    ];
    return months[this.getMonth()];
}

class Container extends React.Component {
    
    state = {
        date: new Date()
    }
    
    next_month = function() {
        let m = this.state.date.getMonth();
        let y = this.state.date.getFullYear();
        if(m == 11) {
            m = 0; y++;
        } else {
            m++;
        }
        let d = 1;
        let new_date = new Date(y, m, d);
        this.setState({
            date: new_date
        });
    }
    
    render() {
        let month = this.state.date.getNameOfMonth();
        let year = this.state.date.getFullYear();
        let days_in_month = this.state.date.daysInMonth();
        let first_day_weekday = this.state.date.firstDayWeekDay();
        
        let items = [];
        for (var i = 0; i < (days_in_month + first_day_weekday - 1); i++) {
            if (i % 7 == 0 && i > 0) {
                items.push(<br />);
            }
            if (i < first_day_weekday - 1) {
                    items.push(<Day className='Day Empty' value=' '/>);
            } else if (i % 7 == 5 || i % 7 == 6) {
                items.push(<Day className='Day Weekend' value={ i + 2 - first_day_weekday }/>)
            } else {
                items.push(<Day className='Day' value={ i + 2 - first_day_weekday }/>)
            }
        }
        
        return(
            <div>
                <h2>{ month } { year }</h2>
                <button onClick={ this.next_month.bind(this) }>Next Month</button>
                <div className='Container'>
                    { items }
                </div>
            </div>
        )
    }   
}

export default Container;