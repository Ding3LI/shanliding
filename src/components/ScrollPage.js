import {motion, useScroll, useSpring} from "framer-motion";

export default function ScrollPage() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="scrollBar">
            <motion.div className="progress-bar" style={{scaleX}}/>
        </div>
    );
}