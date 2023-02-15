import { Link } from 'react-router-dom'
import stella from './stella.jpg'
const AboutUs = props => {
    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <p>
                My name is Will<br/>
                I am a junior student from New York University major in Computer scinece<br/>
                My programming languages include Java, JavaScript, Python, and so on.<br/>
            </p>
            <p>
                This is my cute cat. Her name is Stella. You can touch her freely if you want:)
            </p>
            <img src = {stella} style={{width: '40%', height: '40%' }}></img>
        </div>
    )
}


export default AboutUs