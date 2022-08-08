import './index.scss'
import Loader from 'react-loaders'
import  AnimatedLetters  from '../AnimatedLetters';
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 3000)
    //   }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_11p9kll',
            'template_c5fk5yr',
            form.current,
            'ArQazFnSwSAtkCCGu'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}/>
                </h1>
                <p>
                    I am interested in any roles that are remote or hybrid/onsite in the Chicago land area. However, if you have other requests or questions,
            please don't hesitate to contact me using below form either. 
                </p>
                <div className="contact-form">
                   <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required >
                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                   </form>
                </div>
            </div>
            <div className="info-map">
                Tyler Gubser,
                <br/>
                United States,
                <br/>
                Chicago, IL <br/>
                <span>tylergubser2200@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[41.879266, -87.636390]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
                    <Marker position={[41.879266, -87.636390]}>
                    <Popup>Tyler lives here, lets collaborate :)</Popup>
                    </Marker>
                </MapContainer>    
            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}


export default Contact