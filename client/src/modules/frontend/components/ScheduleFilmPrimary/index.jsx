import styles from './style.module.scss';
import { TagFilled, FieldTimeOutlined } from '@ant-design/icons';
import ScheduleTime from '~/modules/frontend/components/ScheduleTime';
import { useTranslation } from 'react-i18next';

function ScheduleFilmPrimary({
    name,
    category,
    minutes,
    schedules,
    thumbnail,
}) {
    const { t } = useTranslation();

    return (
        <div className="flex w-full ">
            <div>
                <img src={thumbnail} className={styles.thumbnail} />
            </div>
            <div className="ml-5 w-full">
                <div className="text-blue-900 text-3xl font-bold">{name}</div>
                <div className="flex mt-3 text-base">
                    <div>
                        <TagFilled /> {category}
                    </div>
                    <div className="ml-5">
                        <FieldTimeOutlined /> {minutes} {t('system.minutes')}
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-12 gap-5">
                        {schedules?.map((item) => (
                            <ScheduleTime key={item.id} time={item.time} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleFilmPrimary;
