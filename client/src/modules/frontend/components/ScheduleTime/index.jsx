import { Button } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';

function ScheduleTime({ time }) {
    const format = useMemo(() => {
        return dayjs(time).format('HH:MM');
    }, [time]);

    return (
        <div>
            <Button>{format}</Button>
        </div>
    );
}

export default ScheduleTime;
