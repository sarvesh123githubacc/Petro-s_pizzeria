import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'
const About = () => {
  return (
    <div className="about">
        <div className="aboutTop" 
        style={{backgroundImage: `url(${MultiplePizzas})` }}
        >

        </div>
        <div className="aboutBottom">
            <h1> ABOUT US </h1>
            <p>hufhudhfudhfisdfhudshfdjvbjbdvjbcxjkvbcjk bcjbvjbdovdaufhdvjdnvjnvjnvjonvjondjvndnvjvnjdnvjnvhifhuiduidsvudhvudshvusdfvhudcjxn okjocijsoicjonjncjadvjdbvojh</p>
        </div>
      
    </div>
  )
}

export default About
