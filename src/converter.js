const KG_IBS_MULTI = 2.2046;

const converter = (to, value) => {
    if(to === 'kg') return value / KG_IBS_MULTI;
    if(to === 'ibs') return value * KG_IBS_MULTI;

    return 0;
}

module.exports = converter;