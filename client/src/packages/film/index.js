export const getStatus = (status) => {
    switch (status) {
        case 1:
            return 'film.status.waiting';
        case 2:
            return 'film.status.release';
        case 3:
            return 'film.status.closed';
        default:
            throw new Error('status not valid');
    }
};
