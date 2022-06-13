import { useQuery } from 'react-query';
import API from '~/network';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Table } from 'antd';
import dayjs from 'dayjs';
import { getStatus } from '~/packages/film';
import { Link } from 'react-router-dom';

function ListFilms() {
    const { data } = useQuery('films', async () => {
        const response = await API.get('/admin/api/v1/films');
        return response.data;
    });

    const { t } = useTranslation();

    const rows = useMemo(() => {
        return data?.data?.map((item) => ({
            ...item,
            key: item.id,
            action: { id: item.id },
        }));
    }, [data]);

    const columns = useMemo(() => {
        return [
            {
                title: t('film.name'),
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: t('film.time_publish'),
                dataIndex: 'time_publish',
                key: 'time_publish',
                render: (time) => (
                    <span>{dayjs(time).format('DD/MM/YYYY')}</span>
                ),
            },
            {
                title: t('film.status.title'),
                dataIndex: 'status',
                key: 'status',
                render: (status) => <span>{t(getStatus(status))}</span>,
            },
            {
                title: t('system.updated_at'),
                dataIndex: 'updated_at',
                key: 'updated_at',
                render: (time) => (
                    <span>{dayjs(time).format('HH:mm DD/MM/YYYY')}</span>
                ),
            },
            {
                title: t('system.action'),
                dataIndex: 'action',
                key: 'action',
                render: ({ id }) => (
                    <>
                        <Link to={`/admin/films/${id}/edit`}>
                            <Button>{t('system.edit')}</Button>
                        </Link>
                    </>
                ),
            },
        ];
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={rows} />
        </div>
    );
}

export default ListFilms;
