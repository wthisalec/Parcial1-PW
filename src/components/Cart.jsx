import React from "react";
import { useTranslation } from 'react-i18next';

function Cart() {
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t("cart")}</h2>
            <p>{t("welcomeCart")}</p>
        </div>
    );
}

export default Cart;