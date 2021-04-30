import React from 'react';


class Search extends React.Component {

    render() {

        return(
            <div className="input-group mb-3">
          <input onChange={(e) => this.props.funcToCatch(e)} type="search" className="form-control" placeholder="Search country" aria-label="search country" aria-describedby="button-addon2" />
          <input onClick={this.props.onClick} className="btn btn-primary" type="button" value="Search" />
        </div>
        )
    }
}

export default Search;