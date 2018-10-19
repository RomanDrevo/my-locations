import React, {Component} from 'react';
import './Home.module.scss'




class Home extends Component {


    componentDidMount() {
    }


    render() {
        console.log('Home props: ', this.props)

        // if(categoriesStore.isLoadingCategories){
        //     return <img src={loader} className="loader" alt="loading-spinner" />
        // }

        return (
            <div className="home-wrapper">
                <h1>Home</h1>
            </div>

        );
    }
}

export default Home;
