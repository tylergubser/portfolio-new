import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss';
import letterT from '../../assets/images/letterT.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
// import Loader from 'react-loaders'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['y', 'l', 'e', 'r']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

    // useEffect(() => {
    // return setTimeout(() => {
    // setLetterClass('text-animate-hover')
    // }, 4000)
    // }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={letterT} alt="JavaScript Developer Name, Web Developer Name"/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
            <h2>Software Engineer / Animal Enthusiast / Liverpool FC Supporter</h2>
            <Link to="/contact" className="flat-button">
            CONTACT ME
            </Link>
            </div>
            <Logo/>
        </div>
        {/* <Loader type="pacman" /> */}
        </>
    );
}

export default Home