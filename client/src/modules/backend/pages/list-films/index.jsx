import { useQuery } from 'react-query';
import API from '~/network';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';

function ListFilms() {
    const { data } = useQuery('films', async () => {
        const response = await API.get('/admin/api/v1/films');
        return response.data;
    });

    const { t } = useTranslation();

    const columns = useMemo(() => {
        return [
            {
                title: t('film.name'),
                dataIndex: 'name',
                key: 'name',
            },
        ];
    }, []);

    return (
        <div>
            <Table columns={columns} />
        </div>
    );
}

export default ListFilms;
