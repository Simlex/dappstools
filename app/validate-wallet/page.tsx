import { FunctionComponent, ReactElement, Suspense } from "react";
import ValidateWalletPage from "./ValidateWalletPage";

interface ValidateWalletProps {

}

const ValidateWallet: FunctionComponent<ValidateWalletProps> = (): ReactElement => {

    return (
        <Suspense>
            <ValidateWalletPage />
        </Suspense>
    );
}

export default ValidateWallet;