import React from 'react';
import Background from './Background';

export default function Home() {
    return (
        <div id="home-content">
            <a-scene>
                <Background color="#0af"/>
                <a-triangle position="0.001 1.62 -4.65" color="#00fdff" material="" geometry="radius:0.5;primitive:dodecahedron" scale="1 1.5 0.4" light="intensity:0.9;type:hemisphere;groundColor:#ffffff;decay:5;color:#00fdff"></a-triangle>
                <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" geometry="" material=""></a-plane>
            </a-scene>
        </div>
    )
}