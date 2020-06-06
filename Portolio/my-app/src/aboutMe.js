import React from 'react';

import './aboutMe.css';

function AboutMe(props) {
  return (
    <div>
      <div className="skills">
        <ul>
          <li>
            <img
              src="https://image.flaticon.com/icons/svg/732/732050.svg"
              alt="html logo"
            />
            <p>HTML5</p>
          </li>
          <li>
            <img
              src="https://image.flaticon.com/icons/svg/732/732007.svg"
              alt="css logo"
            />
            <p>CSS3</p>
          </li>
          <li>
            <img
              src="https://sass-lang.com/assets/img/styleguide/seal-black-1e36d095.png"
              alt="sass logo"
            />
            <p>SASS</p>
          </li>
          <li>
            <img
              src="https://learnjswith.me/content/images/2015/09/logobw.png"
              alt="JavaScript logo"
            />
            <p>JavaScript</p>
          </li>
          <li>
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111432.svg"
              alt="github logo"
            />
            <p>Github</p>
          </li>
          <li>
            <img
              src="https://image.flaticon.com/icons/svg/2/2181.svg"
              alt="python logo"
            />
            <p>Python</p>
          </li>
          <li>
            <img
              src="https://image.flaticon.com/icons/svg/2103/2103718.svg"
              alt="css logo"
            />
            <p>Machine Learning basics</p>
          </li>
          <li>
            <img
              src="https://www.flaticon.com/premium-icon/icons/svg/1183/1183723.svg"
              alt="css logo"
            />
            <p>React</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
