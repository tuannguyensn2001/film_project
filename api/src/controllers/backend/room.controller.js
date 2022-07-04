const roomRepository = require('../../repository/room.repository');

exports.index = async () => {
    const result = await roomRepository.all();

    return {
        message: 'done',
        data: result,
    };
};
