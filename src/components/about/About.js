import React from 'react'

import Nav from '../common/nav/Nav.js'
import Footer from '../common/footer/Footer.js'

import logo from './img/aboutlogo.png'
import m1 from './img/man1.png'
import m2 from './img/man2.png'
import "./About.css"
const About = () => {
    return (
        <div>
            <Nav />
            <div className="about_main">
                <div className="head">
                    <h1 className="text">About Lotus</h1>
                    <img src={logo} alt="Logo" />
                </div>
                <p className="para">Our goal is to disrupt the traditional social media landscape of just sharing <br /> pictures, ideas, and videos to sharing something more meaningful: <br /> Live Experiences.</p>

                <div className="mission">
                    <h1 className="sub_head">The Mission</h1>
                    <p className="sub_para">To create a platform where users can discover, experience, and share all of their <br /> favorite music from a wide range of services in one location.</p>

                </div>

                <div className="story">
                    <h1 className="sub_head">The Story of Us</h1>
                    <p className="sub_para">
                        More and more these days, people are trying to share music with their friends on social media. This normally comes in the form of a screenshot on Instagram or Snapchat or a link on Facebook or Twitter. While this is great for sharing, people looking to listen to the song, add it to a playlist, or share with their friends must go to a different service and find it themselves.
                        <br />
                        <br />
                        Furthermore, with the streaming market being split between Apple Music, Spotify, and a list of other streaming services, users can only interact with other users of the same service. And thus Lotus was born. Lotus is a social network platform dedicated to discovering, experiencing, and sharing music.
                    </p>
                </div>
                <div className="name">
                    <h1 className="sub_head">The Name</h1>
                    <p className="sub_para">We chose the lotus flower as our core symbol for a few reasons:
                    <br />
                    <br />
                    Lotus ends in the word “us,” emphasizing the social nature of the platform.
                    <br />
                    <br />
                    In eastern religions, the lotus flower represents rebirth and enlightenment, which is what we aim to do to with music sharing.
                    <br />
                    <br />
                    As a water dwelling flower, the lotus can compliment a stream, similar to how we compliment streaming services.
                    <br />
                    <br />
                    Despite only growing in the mud, the lotus flower blooms into something beautiful, representing how we will continue to grow despite any challenges that come our way.
                    </p>
                </div>
                <div className="team">
                    <h1 className="sub_head mb-50">The Team</h1>
                    <div className="emp">
                        <div className="left">
                            <img src={m1} alt="Employee 1" />
                            <div className="info">
                                <p className="empName">Ben Salazar</p>
                                <p className="designation">Co-Founder/CEO</p>
                            </div>
                        </div>
                        <div className="right">
                            <p className="right_text">
                                Ben is a pre-med student at Johns Hopkins University who hopes to pursue a career as a doctor one day. Mostly focusing on science courses during his time in school, he found his love for business during his freshman year in college when he decided to pick up an entrepreneurship minor and started taking business classes.
                                <br />
                                <br />
                                He started Lotus with high school football teammate and long time friend Rahad in order to share his love of music with all of his friends. His music interests include everything from house music and rap to rock and roll. In his free time, Ben enjoys playing the guitar, reading, and playing football with his friends.
                            </p>
                        </div>
                    </div>
                    <div className="emp">
                        <div className="left">
                            <img src={m2} alt="Employee 2" />
                            <div className="info">
                                <p className="empName">Rahad Khan</p>
                                <p className="designation">Co-Founder/CEO</p>
                            </div>
                        </div>
                        <div className="right">
                            <p className="right_text">
                                Rahad is a cofounder of Lotus who has a passion for technology and media. At an early age, he took a great interest in small gadgets, breaking them apart and fixing them to figure out how they work. He is a tech wiz amongst family and friends, often helping to fix their computers; he even started his own computer repair business at the age of 10.
                                <br />
                                <br />
                               In the following years, Rahad would dream of starting a business of his own. He started this journey earlier than expected as a senior in high school when he joined his long time friend Ben to start Lotus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           <Footer /> 
        </div>
    )
}

export default About
