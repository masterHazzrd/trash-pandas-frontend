import React from 'react';
import './styles/footer.css';

function Footer() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <footer>
      <p>
        Developed by: <strong>John M. Gallagher Jr</strong> (aka{' '}
        <em>masterHazzrd</em>)
      </p>
      <p>Last Updated: {lastUpdated}</p>
    </footer>
  );
}

export default Footer;
