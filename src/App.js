import React, {Component} from 'react';
import Header from "./components/Header";
import Headline from "./components/Headline";
import SharedButton from "./components/Button";
import ListItem from "./components/ListItem";
import { connect } from 'react-redux'
import {fetchPosts } from "./actions";

const tempArr = [{
    fName: 'Joe',
    lName: 'Blogs',
    email: 'blogs@gmail.com',
    age: 24,
    onlineStatus: true
}]

class App extends Component{

    constructor(props) {
        super(props);
    }

    fetch = () => {
        this.props.fetchPosts()
    }

    render() {

        const { posts } = this.props;

        const configButton = {
            buttonText: 'Get posts',
            emitEvent: this.fetch
        }

        return (
            <div className="App" data-test='appComponent'>
                <Header/>
                <section className='main'>
                    <Headline
                        header='Posts'
                        description='Click the button to render posts'
                        tempArr={tempArr}
                    />
                    <SharedButton {...configButton}/>
                    {
                        posts.length > 0 &&
                        <div>
                            {
                                posts.map((post, index) => {
                                    const { title, body } = post;
                                    const configListItem = {
                                        title,
                                        description: body
                                    }
                                    return (
                                        <ListItem
                                            key={index}
                                            {...configListItem}
                                        />
                                    )
                                })
                            }
                        </div>
                    }
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(App);
