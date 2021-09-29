import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Header.css';

const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav class={style.nav}>
      <Link activeClassName={style.active} href="/">Home</Link>
      <Link activeClassName={style.active} href="/contact">Me</Link>
    </nav>
  </header>
);

export default Header;
