import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ""};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        //need to fetch weather data
        // our DispatchToProps fn allows us access to fetchWeather action
        this.props.fetchWeather(this.state.term);
        //clear out search bar input
        this.setState({ term: "" });

    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}className="input-group">
                <input
                className="search-bar form-control"
                placeholder="Search the weather in US cities"
                value={this.state.term}
                onChange={this.onInputChange}
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Search
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps) (SearchBar);
