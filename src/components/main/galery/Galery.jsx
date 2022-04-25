/* eslint-disable react/prop-types */
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ImageGaleryContent from './ImageGaleryContent';
import * as albumYasmin from '../../../assets/albums/yasmin';

const useStyles = makeStyles((theme) => ({
    galleryGrid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        [theme.breakpoints.down(915)]: {
            flexDirection: 'column',
            rowGap: '15px',
        },
        marginLeft: '100px',
    },
}));

const Gallery = ({ categories }) => {
    console.log('albumYasmin', albumYasmin);
    const { galleryGrid } = useStyles();
    const categoriesToOrder = Object.entries(categories).map((cat) => cat[1]);
    const categoriesOrdered = categoriesToOrder?.sort((a, b) => {
        return a.order - b.order;
    });
    return (
        <div className="gallery-container">
            <div className={`gallery-grid ${galleryGrid}`}>
                {Object.entries(categoriesOrdered).map((category, i) => {
                    return (
                        <ImageGaleryContent
                            category={category[1]}
                            index={i}
                            key={i}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
