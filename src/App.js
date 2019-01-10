import React, {Component} from 'react';
import PostList from './components/posts/postList';


class App extends Component {
    render() {
        return (
            <div>
                <PostList />
            </div>
        );
    }
}

export default App;
//
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			posts: null
// 		};
// 		this.dataRef = database.ref('/posts/top10');
// 	}
// 	componentWillMount() {
// 		this.dataRef.on('value', (snapshot) => {
// 			this.setState({
// 				posts: snapshot.val()
// 			});
// 		})
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{JSON.stringify(this.state.posts)}
// 			</div>
// 		);
// 	}
// }

