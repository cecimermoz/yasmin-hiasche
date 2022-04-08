import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { palette, spacing } from '../themes/generalTheme';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	footerText: {
		color: palette.ceci,
		textAlign: 'center',
		paddingBottom: spacing(2),
		'& a': {
			textDecoration: 'none',
			borderBottom: '2px solid transparent',
			color: '#6aeccf',
			paddingBottom: '5px',
		},
		'& a:hover': {
			color: palette.aqua,
			borderColor: palette.aqua,
		},
	},
}));

const Footer = () => {
	const { footerText } = useStyles();

	return (
		<footer>
			<Typography variant="body1" className={footerText}>
        Desarrollado por{' '}
				<a
					rel="noreferrer"
					href="https://www.linkedin.com/in/ceciliamermoz/"
					target="_blank"
				>
          Cecilia Mermoz
				</a>
			</Typography>
		</footer>
	);
};

export default Footer;
