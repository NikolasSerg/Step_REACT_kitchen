import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import PostItem from './postItem';
import {load_articles} from '../../AC'

class PostList extends Component {

    // componentDidMount() {
	// this.props.load_articles();
	// 	window.posts =  this.props.posts;
    // }
	render() {
    	console.log(this.props);

		return (
			<div>
				<p>має бути пропс</p>
				{/*<p>{this.props}</p>*/}
				{/*{this.props.posts.map((iterator) => {*/}
					{/*return(*/}
						{/*<p>{iterator.lorem1}</p>*/}
					{/*)*/}
				{/*})}*/}
				{/*{JSON.stringify(this.props.posts[0])}*/}
			</div>
		);
	}
}


export default connect((state) => ({posts: state.loadData}), {load_articles})(PostList);
// PostList.propTypes = {};