import React from 'react'

import Nav from '../common/nav/Nav'
import Footer from '../common/footer/Footer'

import hero_img from './img/hero.png'
import small_hero from './img/heor_small.png'
import m1 from './img/m1.png'
import m2 from './img/m2.png'
import  music from './img/music.png'
import spotify from './img/spotify.png'

import "./Home.css"

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="hero_section">
                <div className="hero">
                    <div className="text">
                        <h1>Experience <br />Everything</h1>
                        <p>To live is to experience. Today, we get to have two lives: one in the real world and <br /> one in the virtual world. In this virtual world, we can share everything about <br /> ourselves, and we think this should include <br /> music.</p>
                    </div>
                    <div className="img">
                        <img src={hero_img} alt="Hero" />
                    </div>
                </div>
                <div className="mid_h_text">
                    Music isn't just what we listen to, it’s who <br />
                    we are...
                </div>
                <div className="info_h">
                    <div className="left_text">
                        <h3>Share and Discover <br /> Music</h3>
                        <p>
                            Share your favorite music with your favorite people and listen <br /> to songs shared by them, all with the tap of a button
                        </p>
                    </div>
                    <div className="right_img">
                        <img src={m1} alt="Phone1" />
                    </div>
                </div>
                <div className="info_h">
                    <div className="left_img">
                        <img src={m2} alt="Phone2" />
                    </div>
                    <div className="right_text">
                        <h3>Show off your interest</h3>
                        <p>
                            Show all of your friends your favorite songs, artists, and playlists all in one place
                        </p>
                    </div>
                    
                </div>
                <div className="cross_plat">
                    <h3>Cross-Platform Streaming</h3>
                    <p>Sync your streaming service and listen in one place with Lotus</p>
                    <div className="imgs">
                        <img src={small_hero} alt="Small Hero" />
                    </div>
                    <div className="social">
                        <div className="img_line">
                            <img className="sp" src={spotify} alt="Spotify Icon" />
                            <div className="ll"></div>
                        </div>
                        <div className="img_line">
                            <img className="mu" src={music} alt="Music" />
                            <div className="rl"></div>
                        </div>
                    </div>
                </div>
                <div className="download">
                    <div className="d_text">
                        <h3>Be the first to download!</h3>
                        <p>Sign up to receive updates</p>
                    </div>
                    <button>Sign Up</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
