import React from "react";
import { useTranslation } from 'react-i18next';

function Menu() {
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t("menu")}</h2>
            <p>{t("welcomeMenu")}</p>
        </div>
    );
}

export default Menu;