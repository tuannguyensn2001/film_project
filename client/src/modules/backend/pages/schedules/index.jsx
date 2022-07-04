import { Button, Form, Input, Modal, Select } from 'antd';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import API from '~/network';
import TimePicker from '~/components/antd/TimePicker';
import DatePicker from '~/components/antd/DatePicker';

function Schedule() {
    const [isOpenModal, setIsOpenModal] = useState(true);

    const onCancel = () => {
        setIsOpenModal(false);
    };

    const open = () => {
        setIsOpenModal(true);
    };

    const { control, watch } = useForm();

    const { data: films } = useQuery('films', async () => {
        const response = await API.get('/admin/api/v1/films');
        return response.data.data.map((item) => ({
            ...item,
            value: item.id,
            label: item.name,
        }));
    });

    const { data: rooms } = useQuery('rooms', async () => {
        const response = await API.get('/admin/api/v1/rooms');
        return response.data.data.map((item) => ({
            ...item,
            label: item.name,
            value: item.id,
        }));
    });

    const isCreateMode = useMemo(() => {
        return !Boolean(watch('id'));
    }, [watch('id')]);

    const title = useMemo(() => {
        if (isCreateMode) {
            return 'Them moi suat chieu';
        }

        return 'Sua suat chieu';
    }, [isCreateMode]);

    return (
        <div>
            <Modal visible={isOpenModal} title={title} onCancel={onCancel}>
                <Form layout="vertical">
                    <div>
                        <Controller
                            name="film_id"
                            control={control}
                            render={({ field }) => (
                                <Form.Item
                                    label="Phim"
                                    value={field.value}
                                    onChange={field.onChange}
                                >
                                    <Select options={films} />
                                </Form.Item>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            name="room_id"
                            control={control}
                            render={({ field }) => (
                                <Form.Item
                                    label="Phong"
                                    value={field.value}
                                    onChange={field.onChange}
                                >
                                    <Select options={rooms} />
                                </Form.Item>
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            name="hour"
                            control={control}
                            render={({ field }) => (
                                <Form.Item label="Thoi gian">
                                    <DatePicker
                                        format={'DD/MM/YYYY'}
                                        {...field}
                                    />
                                </Form.Item>
                            )}
                        />
                        <Controller
                            name="hour"
                            control={control}
                            render={({ field }) => <TimePicker {...field} />}
                        />
                    </div>
                </Form>
            </Modal>

            <Button onClick={open}>Them moi suat chieu</Button>
        </div>
    );
}

export default Schedule;
