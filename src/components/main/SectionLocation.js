import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	textLi: {
		listStyle: 'none',
		'&:first-of-type': {
			fontSize: '20px',
			fontWeight: 700,
			margin: '15px 0',
		},
	},
	imgLoc: {
		width: '100%',
	},
}));

const SectionLocation = ({ sectionData }) => {
	const { textLi, imgLoc } = useStyles();
	const { content } = sectionData;

	return (
		<>
			<img
				className={imgLoc}
				src="https://firebasestorage.googleapis.com/v0/b/yasmin-hiasche-web.appspot.com/o/Utilidades%2Fmap.jpeg?alt=media&token=25a7e51f-db2b-4356-8105-658f6eaf4b8c"
				alt="Dirección: Moldes 2141"
				title="Dirección: Moldes 2141"
			/>
			<Typography variant="body1">
				{content?.map((ph, i) => (
					<li className={textLi} key={i}>
						{' '}
						{ph}{' '}
					</li>
				))}
			</Typography>
		</>
	);
};

export default SectionLocation;
