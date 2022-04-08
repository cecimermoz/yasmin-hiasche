import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { breakpoints, spacing } from '../themes/generalTheme';

const useStyles = makeStyles(() => ({
	title: {
		display: 'flex',
		justifyContent: 'center',
	},
	subtitle: {
		margin: `0 ${spacing(1)}px ${spacing(2)}px ${spacing(1)}px`,
	},
	firulete: {
		background:
      'url(https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/firulete.png?alt=media&token=7a561207-af2d-4cd0-89be-968d9f5bbe32)',
		width: '40px',
		backgroundSize: '100%',
		marginTop: '5px',
		backgroundRepeat: 'no-repeat',
		visibility: 'hidden',
		[breakpoints.up(360)]: {
			visibility: 'visible',
		},
	},
	fRight: {
		transform: 'rotateY(180deg)',
	},
}));

const Title = ({ title }) => {
	const classes = useStyles();

	return (
		<div className={classes.title}>
			<div className={`${classes.firulete} ${classes.fLeft}`} />
			<Typography variant="h2" className={classes.subtitle}>
				{title}
			</Typography>
			<div className={`${classes.firulete} ${classes.fRight}`} />
		</div>
	);
};

export default Title;
