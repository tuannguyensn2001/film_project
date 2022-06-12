import { Col, Form, Input, Row } from 'antd';
import { useFormContext } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

function FormFilm() {
    const { control } = useFormContext();

    const { t } = useTranslation();

    return (
        <Row gutter={20}>
            <Col span={16}>
                <Row gutter={20}>
                    <Col span={12}>
                        <Controller
                            name={'name'}
                            control={control}
                            render={({ field }) => (
                                <Form.Item
                                    value={field.value}
                                    onChange={field.onChange}
                                    label={t('film.name')}
                                >
                                    <Input
                                        placeholder={t('film.example.name')}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Controller
                            name={'director_raw'}
                            control={control}
                            render={({ field }) => (
                                <Form.Item
                                    value={field.value}
                                    onChange={field.onChange}
                                    label={t('film.director')}
                                >
                                    <Input
                                        placeholder={t('film.example.director')}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Col>
            <Col span={8}>abs</Col>
        </Row>
    );
}

export default FormFilm;
