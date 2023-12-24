import React from 'react';
import Typed from 'typed.js';

function TypedAnimation(props) {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: props.WordList,
            typeSpeed: 120,
            backSpeed: 50,
            backDelay: 1500,
            loop: !0
        });

        return () => {
            typed.destroy();
        };
    }, [props.WordList]);

    return (
        <div id="typed-subtitle">
            & <span ref={el}/>
        </div>
    );
}

export default TypedAnimation;