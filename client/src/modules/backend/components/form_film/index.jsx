import { Col, Form, Input, InputNumber, Radio, Row } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';
import DatePicker from '~/components/antd/DatePicker';
import { useCallback } from 'react';
import dayjs from 'dayjs';

function FormFilm() {
    const { control, watch } = useFormContext();

    const { t } = useTranslation();

    const disableDate = useCallback((current) => {
        return dayjs().diff(current, 'dates') >= 0;
    }, []);

    return (
        <Row gutter={20}>
            <Col span={16}>
                <Row gutter={20}>
                    <Col span={12}>
                        <Controller
                            rules={{
                                required: t('film.validate.name_required'),
                            }}
                            name={'name'}
                            control={control}
                            render={({
                                field,
                                fieldState: { invalid, error },
                            }) => (
                                <Form.Item
                                    required
                                    label={t('film.name')}
                                    validateStatus={
                                        invalid ? 'error' : 'success'
                                    }
                                    help={error?.message}
                                >
                                    <Input
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder={t('film.example.name')}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Controller
                            rules={{
                                required: t('film.validate.director_required'),
                            }}
                            name={'director_raw'}
                            control={control}
                            render={({
                                field,
                                fieldState: { invalid, error },
                            }) => (
                                <Form.Item
                                    required
                                    label={t('film.director')}
                                    validateStatus={
                                        invalid ? 'error' : 'success'
                                    }
                                    help={error?.message}
                                >
                                    <Input
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder={t('film.example.director')}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Controller
                            rules={{
                                required: t('film.validate.actor_required'),
                            }}
                            name={'actor_raw'}
                            control={control}
                            render={({
                                field,
                                fieldState: { error, invalid },
                            }) => (
                                <Form.Item
                                    label={t('film.actor')}
                                    validateStatus={
                                        invalid ? 'error' : 'success'
                                    }
                                    help={error?.message}
                                    required
                                >
                                    <Input
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder={t('film.example.actor')}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Controller
                            rules={{
                                required: t('film.validate.category_required'),
                            }}
                            control={control}
                            name={'category_raw'}
                            render={({
                                field,
                                fieldState: { error, invalid },
                            }) => (
                                <Form.Item
                                    label={t('film.category')}
                                    validateStatus={
                                        invalid ? 'error' : 'success'
                                    }
                                    help={error?.message}
                                    required
                                >
                                    <Input
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder={t('film.example.category')}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Controller
                            rules={{
                                required: t('film.validate.language_required'),
                            }}
                            control={control}
                            name={'language_raw'}
                            render={({
                                field,
                                fieldState: { error, invalid },
                            }) => (
                                <Form.Item
                                    label={t('film.language')}
                                    validateStatus={
                                        invalid ? 'error' : 'success'
                                    }
                                    help={error?.message}
                                    required
                                >
                                    <Input
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder={t('film.example.language')}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Controller
                            rules={{
                                required: t('film.validate.minutes_required'),
                            }}
                            control={control}
                            name={'minutes'}
                            render={({
                                field,
                                fieldState: { error, invalid },
                            }) => (
                                <Form.Item
                                    label={t('film.minutes')}
                                    validateStatus={
                                        invalid ? 'error' : 'success'
                                    }
                                    help={error?.message}
                                    required
                                >
                                    <InputNumber
                                        value={field.value}
                                        onChange={field.onChange}
                                        className={styles.input_number}
                                        placeholder={t('film.example.minutes')}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Controller
                            rules={{
                                required: t(
                                    'film.validate.time_publish_required'
                                ),
                            }}
                            name={'time_publish'}
                            control={control}
                            render={({
                                field,
                                fieldState: { error, invalid },
                            }) => (
                                <Form.Item
                                    label={t('film.time_publish')}
                                    validateStatus={
                                        invalid ? 'error' : 'success'
                                    }
                                    help={error?.message}
                                    required
                                >
                                    <DatePicker
                                        placeholder={t(
                                            'film.example.time_publish'
                                        )}
                                        disabledDate={disableDate}
                                        format={'DD/MM/YYYY'}
                                        className={styles.date_picker}
                                        {...field}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={12}>
                        <Controller
                            name={'status'}
                            control={control}
                            render={({ field }) => (
                                <Form.Item label={t('film.status.title')}>
                                    <Radio.Group
                                        value={field.value}
                                        onChange={field.onChange}
                                        options={[
                                            {
                                                value: 1,
                                                label: t('film.status.waiting'),
                                            },
                                            {
                                                value: 2,
                                                label: t('film.status.release'),
                                            },
                                            {
                                                value: 3,
                                                label: t('film.status.closed'),
                                            },
                                        ]}
                                        optionType={'button'}
                                        buttonStyle={'solid'}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={24}>
                        <Controller
                            rules={{
                                required: t(
                                    'film.validate.description_required'
                                ),
                            }}
                            name={'description'}
                            control={control}
                            render={({
                                field,
                                fieldState: { error, invalid },
                            }) => (
                                <Form.Item
                                    required
                                    label={t('film.description')}
                                    validateStatus={
                                        invalid ? 'error' : 'success'
                                    }
                                    help={error?.message}
                                >
                                    <Input.TextArea
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder={t(
                                            'film.example.description'
                                        )}
                                        rows={4}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Col>
            <Col span={8}>
                <div className={styles.thumbnail_wrapper}>
                    <img
                        src={watch('thumbnail')}
                        className={styles.thumbnail}
                    />
                </div>
            </Col>
        </Row>
    );
}

export default FormFilm;
