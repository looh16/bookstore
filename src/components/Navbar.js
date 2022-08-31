import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import navStyles from '../css/Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <section className={navStyles.header}>
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <nav className={navStyles.navBar}>
        <ul className={navStyles.menu}>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={navStyles.userIcon}>
        <FaUserCircle className={navStyles.user} />
      </div>
    </section>
  );
};
export default Navbar;
