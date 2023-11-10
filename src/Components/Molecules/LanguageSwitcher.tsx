import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <Button variant="text" color={'secondary'} onClick={() => changeLanguage('en')}>
                EN
            </Button>
            <Button variant="text" color={'secondary'} onClick={() => changeLanguage('da_DK')}>
                DK
            </Button>
        </div>
    );
};

export default LanguageSwitcher;
