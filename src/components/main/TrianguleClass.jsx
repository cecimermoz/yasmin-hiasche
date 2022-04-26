import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    trianWrapper: {
        width: '200px',
        minHeigth: '200px',
    },
    trianGeneral: {
        position: 'absolute',
        width: '100px',
        height: '125px',
    },
    trian1: {
        background: '#7D3A9E',
    },
    trian2: {
        background: '#4EB1AD',
    },
    trian3: {
        background: '#E3CBDC',
    },
}))

const TrianguleClass = () => {
    const classes = useStyles()

    return (
        <div className={classes.trianWrapper}>
            <div className={`${classes.trianGeneral} ${classes.trian3}`}></div>
            <div className={`${classes.trianGeneral} ${classes.trian1}`}></div>
            <div className={`${classes.trianGeneral} ${classes.trian2}`}></div>
        </div>
    )
}

export default TrianguleClass
