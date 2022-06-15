import { useForm, FormProvider } from 'react-hook-form';
import { Button, Form, notification } from 'antd';
import FormFilm from '~/modules/backend/components/form_film';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueries, useQuery } from 'react-query';
import API from '~/network';
import dayjs from 'dayjs';

function EditFilm() {
    const methods = useForm({
        defaultValues: {
            status: 1,
            thumbnail:
                'https://files.betacorp.vn/files/media%2fimages%2f2022%2f04%2f08%2f274963826-675063727035864-2826472215001750256-n-181843-080422-22.jpg',
        },
    });

    const { id } = useParams();

    const { data } = useQuery(
        ['id', id],
        async () => {
            const response = await API.get(`/admin/api/v1/films/${id}`);
            return response.data;
        },
        {
            onSuccess(response) {
                const { setValue, reset } = methods;
                const { data } = response;

                reset({
                    ...data,
                    time_publish: dayjs(data?.time_publish),
                });
            },
            onError(err) {
                console.log('err', err);
            },
        }
    );

    const navigate = useNavigate();

    const { mutate } = useMutation(
        'update',
        async (data) => {
            const response = await API.put(`/admin/api/v1/films/${id}`, data);
            return response.data;
        },
        {
            onSuccess() {
                navigate('/admin/films');
                notification.success({
                    message: t('system.success.edit'),
                });
            },
            onError() {
                notification.error({
                    message: t('system.error.edit'),
                });
            },
        }
    );

    const submit = (data) => {
        mutate({
            name: data?.name,
            status: data?.status,
            thumbnail: data?.thumbnail,
            director_raw: data?.director_raw,
            actor_raw: data?.actor_raw,
            category_raw: data?.category_raw,
            language_raw: data?.language_raw,
            minutes: data?.minutes,
            time_publish: data?.time_publish,
            description: data?.description,
        });
    };

    const { t } = useTranslation();

    return (
        <div>
            <FormProvider {...methods}>
                <Form
                    layout={'vertical'}
                    onFinish={methods.handleSubmit(submit)}
                >
                    <FormFilm />
                    <div>
                        <Button type={'primary'} htmlType={'submit'}>
                            {t('system.edit')}
                        </Button>
                    </div>
                </Form>
            </FormProvider>
        </div>
    );
}

export default EditFilm;
