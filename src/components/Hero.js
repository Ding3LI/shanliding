import React, {Component} from "react";

import TypedAnimation from './TypedAnimation';
import {DecoderText} from './DecoderText';
import {Section} from "./Section";

class Hero extends Component {
    titles = [];

    constructor() {
        super();
        this.state = {checked: false};
    }

    render() {
        if (this.props.sharedData) {
            this.titles = this.props.sharedData.titles;
        }

        return (
            <Section
                id={this.props.id}
                as="section"
                ref={this.props.sectionRef}
            >
                <header style={{height: window.innerHeight, display: 'block'}}>
                    <div className="row" style={{height: '100%'}}>
                        <div className="col-md-12">
                            <div id="hero-content">
                            <span className="hero-name">
                                <DecoderText text="SHANLI DING" delay={150}/>
                            </span>
                                <span className="hero-subtitle">
                                <DecoderText text="Scientist" delay={200}/>
                            </span>
                                <TypedAnimation WordList={this.titles}/>
                            </div>
                        </div>
                    </div>
                    <img src="/images/bottom_bg1.png" alt="background" className="hero-bg1"/>
                </header>
            </Section>
        );
    }
}

export default Hero;
