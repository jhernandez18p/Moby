import React, { Component } from 'react';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
import { requestFlatpage } from '../../../redux/actions/flatpage';

class FlatPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            url: '',
            title: ''
        }
    }

    componentDidMount(){
        let url = this.props.match.url;
        let _url = url.split('/')
        this.setState({
            title:_url[_url.length-1]
        });
        this.props.onFetchFlatpage(_url[_url.length-1]);
    }
    
    componentDidUpdate(prevProps, prevState){
        if ( this.props.location.pathname !== prevProps.location.pathname ){
            // console.log(prevProps, prevState);
            let url = this.props.match.url;
            let _url = url.split('/')
            this.setState({
                title:_url[_url.length-1]
            });
            this.props.onFetchFlatpage(_url[_url.length-1]);
        }
    }

    render() {
        // console.log(this.props.flatpage);
        if( this.state.title !== '' && this.props.flatpage.id !== 0 ){
            let content = this.props.flatpage.content;
            return (
                <div>
                    <div className="container is-padding-top-30">
                        <p>{content}</p>
                    </div>
                </div>
            )
        }
        else{
            return (        
                <div></div>
            );
        }
    }
}

const flatpageSelector = createSelector(state => state.flatpage, flatpage => flatpage);                                             // flatpage

const mapStateToProps = createSelector(
  flatpageSelector,
  (flatpage) => (
    {
      flatpage,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchFlatpage: requestFlatpage,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatPage);