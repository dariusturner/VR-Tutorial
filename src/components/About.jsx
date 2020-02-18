import React from 'react';
import Background from './Background';
import Puppy from '../Assets/images/puppy.jpg';

export default function About() {

    return (
        <div id="about-content">
            <a-scene>
                <Background color="#faa"/>
                <a-box id="image-box" src={Puppy} position="0 2.027 -3.484" rotation="0 45 -55" material=""></a-box>
                <a-entity position="0.179 0.068 -4.892" rotation="-90 0 0" scale="4 5 1" geometry="primitive:plane"></a-entity>
            </a-scene>
        </div>
    )
}