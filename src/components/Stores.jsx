import React from 'react';
import { useTranslation } from 'react-i18next';

function Stores() {
        const { t } = useTranslation();
    return (
        <div>
            <h2>{t("stores")}</h2>
            <p>{t("welcomeStores")}</p>
        </div>
    );
}

export default Stores;