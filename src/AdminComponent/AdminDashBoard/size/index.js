

import SizeProvider from './context/sizeContext';
import SizeComp from './page';
function SizePage() {

    return (
        <>
            <SizeProvider >
                <SizeComp />
            </SizeProvider>


        </>

    );
}

export default SizePage;