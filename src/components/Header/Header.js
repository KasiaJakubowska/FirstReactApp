import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={`container ${styles.header}`}>
      <Searchbar onSearch={props.onSearch} />
    </header>
  );
}

export default Header;