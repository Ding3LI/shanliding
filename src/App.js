import {useState, useEffect, useRef, createContext} from "react";
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.scss";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {Navbar} from './components/Navbar';
import ScrollPage from "./components/ScrollPage";

export const AppContext = createContext({});

const App = () => {
    const [resumeData, setResumeData] = useState({});
    const [sharedData, setSharedData] = useState({});
    const [visibleSections, setVisibleSections] = useState([]);
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
    const hero = useRef();
    const about = useRef();

    const applyPickedLanguage = (pickedLanguage) => {
        document.documentElement.lang = pickedLanguage;
        const resumePath = `res_primaryLanguage.json`;
        loadResumeFromPath(resumePath);
    };

    const loadResumeFromPath = (path) => {
        $.ajax({
            url: path,
            dataType: 'json',
            cache: false,
            success: function (data) {
                setResumeData(data);
            },
            error: function (xhr, status, err) {
                alert(err);
            },
        });
    };

    const loadSharedData = () => {
        $.ajax({
            url: 'portfolio_shared_data.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                setSharedData(data);
            },
            error: function (xhr, status, err) {
                alert(err);
            },
        });
    };

    useEffect(() => {
        loadSharedData();
        applyPickedLanguage(window.$primaryLanguage);
        const sections = [hero, about];
        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target;
                        observer.unobserve(section);
                        if (visibleSections.includes(section)) return;
                        setVisibleSections(prevSections => [...prevSections, section]);
                    }
                });
            },
            {rootMargin: '0px 0px -10% 0px', threshold: 0.1}
        );
        const indicatorObserver = new IntersectionObserver(
            ([entry]) => {
                setScrollIndicatorHidden(!entry.isIntersecting);
            },
            {rootMargin: '-100% 0px 0px 0px'}
        );

        sections.forEach(section => {
            sectionObserver.observe(section.current);
        });

        indicatorObserver.observe(hero.current);

        return () => {
            sectionObserver.disconnect();
            indicatorObserver.disconnect();
        };
    }, [visibleSections]);

    return (
        <div>
            <Navbar/>
            <ScrollPage/>
            <Hero
                id="hero"
                sectionRef={hero}
                scrollIndicatorHidden={scrollIndicatorHidden}
                sharedData={sharedData.basic_info}
            />
            <Profile
                id="about"
                sectionRef={about}
                visible={visibleSections.includes(about.current)}
                resumeBasicInfo={resumeData.basic_info}
                sharedBasicInfo={sharedData.basic_info}
            />
            <Projects
                resumeProjects={resumeData.projects}
                resumeBasicInfo={resumeData.basic_info}
            />
            <Skills
                sharedSkills={sharedData.skills}
                resumeBasicInfo={resumeData.basic_info}
            />
            <Experience
                resumeExperience={resumeData.experience}
                resumeBasicInfo={resumeData.basic_info}
            />
            <Footer sharedBasicInfo={sharedData.basic_info}/>
        </div>
    );
};

export default App;
