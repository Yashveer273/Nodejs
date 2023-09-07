import React, { useState } from 'react';

function Menu() {
  const [menuItems] = useState([
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Services', link: '/services' },
    { id: 4, label: 'Contact', link: '/contact' },
  ]);

  const handleClick = (link) => {
    // You can add logic here to handle the menu item click, e.g., navigating to the selected link.
    console.log(`Clicked on ${link}`);
  };

  return (
    <ul className="menu">
      {menuItems.map((item) => (
        <li key={item.id}>
          <a href={item.link} onClick={() => handleClick(item.link)}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
