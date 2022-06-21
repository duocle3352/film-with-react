const image = (path, width = '200') => {
    const link = `https://image.tmdb.org/t/p/w${width}${path}`;

    return link;
};

export default image;
