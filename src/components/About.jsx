import React from 'react';
import styles from './About.module.css';

function About() {
	return (
		<div className={styles.info}>
			<h1 className={styles.h1}>ABOUT</h1>
			<h4 className={styles.h4}>
				Hello I created this page because climate information and predictions
				are the basis for decision making in public health, risk management,
				agriculture, fisheries, water management, tourism, transportation and
				energy. These sectors urgently need science-based information to plan
				their activities.
			</h4>
			<h5 className={styles.h5}>Juan Ulloa - Full Stack Developer</h5>
		</div>
	);
}

export default About;
