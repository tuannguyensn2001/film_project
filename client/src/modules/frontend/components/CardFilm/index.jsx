import styles from './style.module.scss';
import { Button } from 'flowbite-react';

function CardFilm() {
    return (
        <div className={'w-64'}>
            <div>
                <img
                    className={'h-96 rounded-xl w-full cursor-pointer'}
                    src="https://files.betacorp.vn/files/media%2fimages%2f2022%2f04%2f08%2f274963826-675063727035864-2826472215001750256-n-181843-080422-22.jpg"
                    alt=""
                />
            </div>
            <div>
                <div className={styles.name}>
                    Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn
                </div>
            </div>
            <div>
                <div>
                    <span className={'font-semibold'}>Thể loại:</span> Hành
                    động, Phiêu lưu
                </div>
                <div>
                    <span className={'font-semibold'}>Thời lượng:</span> 127
                    phút
                </div>
            </div>
            <div className={'mt-5'}>
                <Button style={{ width: '100%' }} gradientDuoTone="greenToBlue">
                    mua ve
                </Button>
            </div>
        </div>
    );
}

export default CardFilm;
