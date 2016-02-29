import React from 'react';

const styles = {
	app: {},
	section: {}
};

export default (props) => {
	return (
		<main style={styles.app}>
			<section style={styles.section}>
				{props.children}
			</section>
		</main>
	);
};