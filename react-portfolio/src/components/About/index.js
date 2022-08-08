import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useEffect, useState } from 'react'
import { faHtml5, faCss3, faReact, faJsSquare, faGitAlt, faAngular} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    // const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])
    
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    // letterClass={letterClass} 
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I am passionate about coding and I am hungry to learn as much as possible in the extensive
                and ever-changing world of software development. I have always been drawn to technology,
                ever since I was a child playing video games and tinkering around the first computers back
                in the 1990’s. Unfortunately, I have not had an opportunity to pursue a career in software
                development until very recently. I am hoping to get an opportunity to gain real-world experience
                applying agile methodologies to the development and deployment of innovative, complex
                technology while also contributing to the strategic growth of the company.
                </p>
                <p>
                I'm naturally curious, and perpetually working on improving my skills one design problem at a time. </p>
                <p>
                For me, the exciting part of software development is the limitless potential to create innovative
                systems, applications, and programs. Software has transformed the way societies around the
                world operate in every way. From the way governments interact to the way everyday people
                order their food or socialize online, software affects every aspect of our daily lives and has the
                potential to improve the world we live in. I aspire to be a small contributor in a grand system of
                creators who vehemently work to solve problems, maximize efficiency, and collaborate in ways
                that progress our society.
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    
                </div>
            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About