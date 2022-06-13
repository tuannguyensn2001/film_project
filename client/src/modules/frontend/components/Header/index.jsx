import styles from './style.module.scss';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();

    const list = useMemo(() => {
        return [
            {
                label: t('nav.schedule'),
            },
            {
                label: t('nav.film'),
            },
            {
                label: t('nav.price'),
            },
            {
                label: t('nav.news'),
            },
            {
                label: t('nav.members'),
            },
        ];
    }, []);

    return (
        <div className={styles.header}>
            <div className="h-full w-full px-80">
                <div className="flex justify-between h-full">
                    <div>
                        <img
                            src="https://www.betacinemas.vn/Assets/Common/logo/logo.png"
                            alt=""
                        />
                    </div>
                    <div className={'flex'}>
                        {list.map((item) => (
                            <div key={item.label} className={styles.nav_item}>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
