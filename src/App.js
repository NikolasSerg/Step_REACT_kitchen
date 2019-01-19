import React, {Component} from 'react';
import PostList from './components/posts/postList';
import {BrowserRouter, Switch, Route} from 'react-router-dom';




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