import fs from 'fs';

const templateHelper = {
    currentTheme: 'bluezone',
    activeThemes: {
        'bluezone': 'Blue Zone',
        'BootstrapLight': "Bootstrap Light",
        'BootstrapDark': "Bootstrap Dark",
        'basic': 'Basic Theme'
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
