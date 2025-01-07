import { useState, useEffect } from 'react';
import localforage from 'localforage';

const useTableSettings = () => {
    const [settings, setSettings] = useState({});

    // Load saved settings from localStorage or default settings
    useEffect(() => {
        const loadSettings = async () => {
            const savedSettings = await localforage.getItem('tableSettings');
            if (savedSettings) {
                setSettings(savedSettings);
            }
        };
        loadSettings();
    }, []);

    // Save the settings to localStorage
    const saveSettings = async (newSettings) => {
        await localforage.setItem('tableSettings', newSettings);
        setSettings(newSettings); // Update local state with new settings
    };

    return {
        settings,
        saveSettings
    };
};

export default useTableSettings;