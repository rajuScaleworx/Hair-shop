

import SizeProvider from './context/sizeContext';
import LengthComp from './page';
function LengthPage() {

    return (
        <>
            <SizeProvider >
                <LengthComp />
            </SizeProvider>


        </>

    );
}

export default LengthPage;