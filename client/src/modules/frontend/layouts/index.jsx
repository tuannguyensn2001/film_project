import Header from '~/modules/frontend/components/Header';

function LayoutFrontend({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default LayoutFrontend;
