import { React, useEffect, useState} from 'react';
import { useField } from 'react-final-form';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import { useRecordContext } from 'ra-core';
import loadImage from "blueimp-load-image/js";
import exifr from 'exifr';

const useStyles = makeStyles(
    {
        list: {
            display: 'flex',
            listStyleType: 'none',
        },
        image: {
            margin: '1rem',
            maxHeight: '300px',
            maxWidth: '900px',
        },
    },
    { name: 'RaImageField' }
);

const ImageField = (props) => {
    const {
        className,
        classes: classesOverride,
        emptyText,
        source,
        src,
        title,
    } = props;
    const record = useRecordContext(props);
    const sourceValue = get(record, source);
    const classes = useStyles(props);

    const titleValue = get(record, title) || title;

    const [exifData, setExifData] = useState(null);
    const [gpsData, setGpsData] = useState(null);
    const { input, meta } = useField(source);
    useEffect(() => {
        const getExif = async () => {
            const res = await exifr.parse(sourceValue, true);
            const gps = await exifr.gps(sourceValue);
            setExifData(res);
            setGpsData(gps);
        }
        getExif();
    }, [sourceValue]);
    console.log(input.name);
    input.onChange('random');
//     console.log(meta);

//     console.log(exifData);
    return (
        <div className={className} >
            <img
                title={titleValue}
                alt={titleValue}
                src={sourceValue}
                className={classes.image}
            />
            <br/>
            Create: {(exifData && exifData.CreateDate ? exifData.CreateDate.toString() : '')}
            <br/>
            Original: {(exifData && exifData.DateTimeOriginal ? exifData.DateTimeOriginal.toString() : '')}
            <br/>
            Modified: {(exifData && exifData.ModifyDate ? exifData.ModifyDate.toString() : '')}
            <br/>
            GPS: {(exifData && exifData.GPSDateStamp ? exifData.GPSDateStamp.toString() : '')} [{(exifData && exifData.GPSTimeStamp ? exifData.GPSTimeStamp.toString() : '')}]
            <br/>
            {(gpsData ? "lat: ".concat(gpsData.latitude.toFixed(5)) : '')} {(gpsData ? "lon: ".concat(gpsData.longitude.toFixed(5)) : '')}

        </div>
    );
};

// What? TypeScript loses the displayName if we don't set it explicitly
ImageField.displayName = 'ImageField';

ImageField.defaultProps = {
    addLabel: true,
};

ImageField.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
};

export default ImageField;
