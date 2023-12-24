import profileImg from '../assets/cyberMe.png';
import profileImgPlaceholder from '../assets/profile-placeholder.jpg';
import {useState} from 'react';
import {Transition} from './Transition';
import {Section} from "./Section";
import {DecoderText} from "./DecoderText";
import {Image} from './Image';
import {media} from '../utils/style';
import styles from './Profile.module.css';

const Profile = (props) => {
    if (props.resumeBasicInfo) {
        var hello = props.resumeBasicInfo.description_header;
        var about = props.resumeBasicInfo.description;
    }
    const [focused, setFocused] = useState(false);
    const visible = props.visible;
    return (
        <Section
            id={props.id}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            as="section"
            ref={props.sectionRef}
        >
            <Transition in={visible || focused} timeout={0}>
                {visible => (
                    <div className="col-md-12">
                        <h1 data-visible={visible} className={styles.title} style={{color: "black"}}>
                            <DecoderText text="Hi There" start={visible} delay={500}/>
                        </h1>
                        <div className="row center mx-auto mb-10">
                            <div className="col-md-5 center">
                                <div>
                                    <p className={styles.verticalText}>
                                        <DecoderText text="档案" start={visible} delay={500}/>
                                    </p>
                                </div>
                                <div data-visible={visible} className={['polaroid', styles.description].join(' ')}>
                                    <span style={{cursor: "auto"}}>
                                        <Image
                                            reveal
                                            delay={100}
                                            placeholder={profileImgPlaceholder}
                                            src={profileImg}
                                            sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                                            alt="Shanli D."
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className={['col-md-6', 'center', styles.description].join(' ')}
                                 data-visible={visible}>
                                <div className="col-md-12">
                                    <div className="card">
                                        <div
                                            className="card-body font-trebuchet text-justify ml-3 mr-3"
                                            style={{
                                                height: "auto",
                                                fontSize: "132%",
                                                lineHeight: "200%",
                                            }}
                                        >
                                            <br/>
                                            <span className="wave">{hello} :) </span>
                                            <br/>
                                            <br/>
                                            {about}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </Section>
    );
};

export default Profile;
