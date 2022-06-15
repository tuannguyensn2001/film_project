import SlideBanner from '~/modules/frontend/components/SlideBanner';
import CardFilm from '~/modules/frontend/components/CardFilm';
import TabFilm from '~/modules/frontend/components/TabFilm';

function Home() {
    return (
        <div>
            <SlideBanner />

            <div className="ml-60">
                <div className={'mt-10'}>
                    <TabFilm />
                </div>
                <CardFilm />
            </div>
        </div>
    );
}

export default Home;
