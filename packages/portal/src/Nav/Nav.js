import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.css';

export const Nav = () => (
	<nav className={styles.nav}>
		<Link to='/'>Main</Link>
		<Link to='/module1'>Module 1</Link>
		<Link to='/module2'>Module 2</Link>
	</nav>
);
