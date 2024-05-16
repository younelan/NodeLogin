import fs from 'fs';

const templateHelper = {
    currentTheme: 'funzone',
    activeThemes: {
        'funzone': 'Fun Zone theme',
        'bubbly_goodness': 'Bubbly goodness',
        'doctors_office': "Doctor's office",
        'uncomplicated': 'Uncomplicated',
        'enrainment': 'Enrainment',
        'yan': 'Yan Default theme'
    },
    
    render(htmlfile, myvars) {
        const htmlTemplate = fs.readFileSync(htmlfile, 'utf8');
        return htmlTemplate.replace(/\{(\w*)\}/g, (match, key) => myvars.hasOwnProperty(key) ? myvars[key] : '');
    },

    setTheme(myTheme) {
        this.currentTheme = myTheme;
    }
};

export default templateHelper;
