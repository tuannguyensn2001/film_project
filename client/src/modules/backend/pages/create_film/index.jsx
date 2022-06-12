import { useForm } from 'react-hook-form';
import FormFilm from '~/modules/backend/components/form_film';
import { Button, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import useBackendTranslation from '~/hooks/useBackendTranslation';
import { FormProvider } from 'react-hook-form';

function CreateFilm() {
    const methods = useForm();

    const submit = (data) => {
        console.log(data);
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
                        <Button htmlType={'submit'}>
                            {t('system.create')}
                        </Button>
                    </div>
                </Form>
            </FormProvider>
        </div>
    );
}

export default CreateFilm;
