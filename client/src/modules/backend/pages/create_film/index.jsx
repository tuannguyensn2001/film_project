import { Button, Form, notification } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormFilm from '~/modules/backend/components/form_film';
import styles from './style.module.scss';
import { useMutation } from 'react-query';
import API from '~/network';
import { useNavigate } from 'react-router-dom';

function CreateFilm() {
    const methods = useForm({
        defaultValues: {
            status: 1,
            thumbnail:
                'https://files.betacorp.vn/files/media%2fimages%2f2022%2f04%2f08%2f274963826-675063727035864-2826472215001750256-n-181843-080422-22.jpg',
        },
    });

    const navigate = useNavigate();

    const { t } = useTranslation();

    const { mutate } = useMutation(
        'create',
        async (data) => {
            const response = await API.post('/admin/api/v1/films', data);
            return response.data;
        },
        {
            onSuccess() {
                notification.success({
                    message: t('system.success.create'),
                });
                navigate('/admin/films');
            },
            onError() {
                notification.error({
                    message: t('system.error.create'),
                });
            },
        }
    );

    const submit = (data) => {
        mutate(data);
    };

    return (
        <div>
            <FormProvider {...methods}>
                <Form
                    layout={'vertical'}
                    onFinish={methods.handleSubmit(submit)}
                >
                    <FormFilm />
                    <div className={styles.form_footer}>
                        <Button type={'primary'} htmlType={'submit'}>
                            {t('system.create')}
                        </Button>
                    </div>
                </Form>
            </FormProvider>
        </div>
    );
}

export default CreateFilm;
