import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PostItem from './postItem';
import {load_articles} from '../../AC'

class PostList extends Component {
    componentWillMount() {
	this.props.load_articles();
    }
	render() {
		return (
			<div>
				<PostItem {...this.props}/>
			</div>
		);
	}
}

export default connect(null, {load_articles})(PostList);
// PostList.propTypes = {};