const KG_LBS_MULTI = 2.2046;

const converter = (value, to) => {
    if(to === 'lbs') return value * KG_LBS_MULTI;
    if(to === 'kg') return value / KG_LBS_MULTI;

    return 0;
}

module.exports = converter;