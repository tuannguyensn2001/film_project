const cloudinary = require('../../packages/cloudinary');

exports.upload = async (req) => {
    const base64 = req.body.base64;

    const result = await cloudinary.uploader.upload(base64, {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    });

    return {
        data: result,
    };
};
