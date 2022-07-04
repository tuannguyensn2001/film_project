import { useMemo } from 'react';
import { useQuery } from 'react-query';
import ScheduleFilmPrimary from '~/modules/frontend/components/ScheduleFilmPrimary';
import API from '~/network';

function ScheduleFilm({ day }) {
    const { data } = useQuery(['day', day], async () => {
        const response = await API.get('/api/v1/schedules', {
            params: {
                time: day,
            },
        });
        return response.data;
    });

    const result = useMemo(() => {
        const films = data?.data;

        if (!Boolean(films)) {
            return undefined;
        }

        let index = 0;
        let max = -1;

        for (let i = 1; i < films.length; i++) {
            if (max < films[i].schedules.length) {
                max = films[i].schedules.length;
                index = i;
            }
        }

        return {
            primary: films[index],
            normal: films.splice(index, 1),
        };
    }, [data]);

    return (
        <div>
            {Boolean(result?.primary) && (
                <ScheduleFilmPrimary
                    name={result.primary.name}
                    category={result.primary.category_raw}
                    minutes={result.primary.minutes}
                    schedules={result.primary.schedules}
                    thumbnail={result.primary.thumbnail}
                />
            )}
        </div>
    );
}

export default ScheduleFilm;
