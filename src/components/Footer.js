import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>Copyright &copy; 2019 Namekit.</li>
        <li>
          Made with <span role="img" aria-label="love">❤️</span> in Brooklyn by <a href="https://dbtlr.com">Drew Butler</a>
        </li>
      </ul>
    </footer>
  );
}
