import { Tabs } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import ScheduleFilm from '~/modules/frontend/components/ScheduleFilm';

function Schedule() {
    const nextDay = useMemo(() => {
        const now = dayjs();

        const result = [];

        for (let i = 1; i <= 5; i++) {
            result.push(now.add(i, 'day'));
        }

        return result;
    }, []);

    return (
        <div className="px-80">
            <div>
                <Tabs size="large">
                    {nextDay.map((item) => (
                        <Tabs.TabPane
                            key={item.format('DD/MM/YYYY')}
                            tab={item.format('DD/MM/YYYY')}
                        >
                            <ScheduleFilm day={item.format('DD/MM/YYYY')} />
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}

export default Schedule;
