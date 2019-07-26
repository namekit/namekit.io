import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <figure>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="-255 347 100 100"
          xmlSpace="preserve">
          <path 
            class="st0"
            d="M-201.5,406.5v-28h38v28H-201.5z M-201.5,358.5h24v14h-24V358.5z M-245.5,394.5h38v38h-38V394.5z M-231.5,364.5  h24v24h-24V364.5z M-177.5,436.5h-24v-24h24V436.5z" />
        </svg>
      </figure>
      <section>
        <h1>{config.heading}</h1>
        <p>{config.subHeading}</p>
      </section>
    </header>
  );
}
