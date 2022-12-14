import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss';
import letterT from '../../assets/images/letterT.png'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Logo from './Logo'

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

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
        clearTimeout(timer);
    }
})

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
            <img src={letterT} alt="JavaScript Developer Name, Web Developer Name" className="letterT"/>
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
            <a href="https://docs.google.com/document/d/1qL9wyX2Am5tdYfcBi6IwOp0B0zNfNMZ_4i_qJaogWDw/edit" className="flat-button">RESUME</a>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home