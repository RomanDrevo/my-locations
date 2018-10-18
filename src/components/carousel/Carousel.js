import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Swiper from 'react-id-swiper';
// import BenefitBox from '../../../common/benefitbox/BenefitBox';
import './Carousel.module.scss';
import InlineSpinner from '../InlineSpinner';


@observer
export default class Carousel extends Component {
    playerRefs = {};
    state = {
        carouselItems: [],
        fuckSwiperBug: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({fuckSwiperBug: true}), 1000);
    }

    // componentWillMount() {
    //     this._initCarouselItems(this.props);
    // }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     this._initCarouselItems(nextProps);
    // }

    // _initCarouselItems(props) {
    //     const { benefits } = props;
    //     const carouselItems = benefits.toJS();
    //
    //     // Insert video ads so that they are not in first (or last) place to avoid problems with dom manipulation
    //     // due to swiper looping duplicating slides
    //     // videoAds.forEach(x => {
    //     //     carouselItems.splice(Math.min(1, benefits.length), 0, x);
    //     // });
    //
    //     this.setState({ carouselItems });
    // }

    // _renderBenefit(benefit) {
    //     return <BenefitBox className="carousel-item" benefit={benefit}/>;
    // }


    render() {
        const params = {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        };
        // if (!carouselItems.length) {
        //     return <InlineSpinner/>
        // }


        return (
            <div className='mobile-slider'>
                <div className="list-unstyled flex justify-content mobile-slider-list">
                    <Swiper
                        loop={true}
                        rtl={true}
                        autoplay={{delay: 3500}}
                        centeredSlides={true}
                        preloadImages={false}
                        watchSlidesVisibility={true}
                        lazyLoading={false}
                        slidesPerView="auto"
                        autoplayDisableOnInteraction={false}
                        {...params}
                    >


                        <div className="swiper-slide featured-benefit-wrapper">
                            xxx222
                        </div>
                        <div className="swiper-slide featured-benefit-wrapper">
                            xxx!!!
                        </div>
                        <div className="swiper-slide featured-benefit-wrapper">
                            xxx557
                        </div>

                    </Swiper>
                </div>
            </div>
        );
    }
};
