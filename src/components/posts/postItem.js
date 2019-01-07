import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class PostItem extends Component {

	render() {
		const top10 = {...this.props};
		return (
			<div>
				<p>{JSON.stringify(top10)}</p>
			</div>
		);
	}
}

// PostItem.propTypes = {};

export default PostItem;
