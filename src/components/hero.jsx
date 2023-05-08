// src/components/hero.js
import React from "react"
import PROFILE_IMG from "../../static/hengineer.png"
import "../styles/hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src={PROFILE_IMG} className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by Hengineer.<br />
                    Front Engineer at Hoge.Inc. Love JavaScript.
                </p>
            </div>
        </div>
    )
}