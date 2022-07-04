import { Upload } from 'antd';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutation } from 'react-query';
import API from '~/network';
import styles from './style.module.scss';

const getBase64 = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', () => resolve(reader.result));
    });
};

function UploadThumbnail() {
    const { watch, setValue } = useFormContext();

    const { mutate, isLoading } = useMutation(
        'upload',
        (base64) => API.post('/api/v1/upload', { base64 }),
        {
            onSuccess(response) {
                const url = response.data.data.secure_url;

                setValue('thumbnail', url);
            },
        }
    );

    const handleChange = useCallback(async (file) => {
        const base64 = await getBase64(file);

        mutate(base64);

        return false;
    }, []);

    return (
        <div>
            <Upload
                // name="avatar"
                // listType="picture-card"
                // className="avatar-uploader"
                showUploadList={false}
                name="avatar"
                className="cursor-pointer"
                beforeUpload={handleChange}
            >
                <div className={styles.thumbnail_wrapper}>
                    <img
                        src={watch('thumbnail')}
                        className={styles.thumbnail}
                    />
                </div>
            </Upload>
        </div>
    );
}

export default UploadThumbnail;
