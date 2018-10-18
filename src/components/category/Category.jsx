import React from 'react';
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import './Category.module.scss'


class Category extends ResponsiveComponent {

    state = {
        isHovered: false
    }

    showSubCategories = () =>{
        console.log('--showSubCategories')
        this.setState({
            isHovered: true
        })
    }

    hideSubCategories = () =>{
        console.log('--hideSubCategories')
        this.setState({
            isHovered: false
        })
    }

    renderDesktop() {
        const {category} = this.props

        return (
            <div
                onMouseEnter={this.showSubCategories}
                onMouseLeave={this.hideSubCategories}
                className="category" style={{ backgroundImage: `url(${category.image})`}}
            >
                <div className="category-name">{category.name}</div>
                {
                    this.state.isHovered ?
                        <div className="category-back">
                            Back
                        </div>
                        :
                        null
                }
            </div>

        );
    }

    renderMobile() {
        return <div>Mobile Category</div>
    }
}

export default Category;
