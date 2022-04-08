import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	textLi: {
		listStyle: 'none',
	},
}));

const SectionText = ({ sectionData }) => {
	const { textLi } = useStyles();
	const { content } = sectionData;

	return (
		<Typography variant="body1">
			{content?.map((ph, i) => (
				<li className={textLi} key={i}>
					{' '}
					{ph}{' '}
				</li>
			))}
		</Typography>
	);
};

export default SectionText;
