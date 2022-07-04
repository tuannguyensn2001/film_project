import { Dayjs } from 'dayjs';
import * as React from 'react';
import DatePicker from '~/components/antd/DatePicker';

const TimePicker = React.forwardRef((props, ref) => {
    return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
