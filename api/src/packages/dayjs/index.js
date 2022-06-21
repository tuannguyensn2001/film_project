const customParseFormat = require('dayjs/plugin/customParseFormat');
const dayjs = require('dayjs');
dayjs.extend(customParseFormat);

module.exports = dayjs;
