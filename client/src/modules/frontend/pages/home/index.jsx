import SlideBanner from '~/modules/frontend/components/SlideBanner';
import CardFilm from '~/modules/frontend/components/CardFilm';

function Home() {
    return (
        <div>
            <SlideBanner />
            <div className="ml-60">
                <CardFilm />
            </div>
        </div>
    );
}

export default Home;
