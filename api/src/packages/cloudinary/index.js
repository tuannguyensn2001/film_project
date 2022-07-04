const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dpsadiuv8',
    api_key: '935167868966878',
    api_secret: 'OCZMjkLgdyBfheBmirEnkzTaegk',
});

module.exports = cloudinary;
