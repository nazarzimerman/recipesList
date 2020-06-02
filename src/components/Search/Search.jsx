import React from "react";
import style from "./Seacrh.module.css";
import {connect} from 'react-redux';
import {searchChange} from './module/actions.js'

class Search extends React.Component {
    search = (event) => {
        const value = event.target.value;
        this.props.onSearchChange(value);
    };

    render() {
        return (
            <div className={style.search}>
                <input className={style.input} type="text" onChange={this.search}/>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (searchTerm) => {
            dispatch(searchChange(searchTerm))
        }
    }
};

export default connect(null, mapDispatchToProps)(Search);
