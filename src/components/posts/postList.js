import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import PostItem from './postItem';
import {load_articles} from '../../AC'

class PostList extends Component {

    componentDidMount() {
	this.props.load_articles();
		window.posts =  this.props.posts;
    }
	render() {
		return (
			<div>
				{this.props.posts}
			</div>
		);
	}
}


export default connect((state) => ({posts: state.loadData}), {load_articles})(PostList);
// PostList.propTypes = {};