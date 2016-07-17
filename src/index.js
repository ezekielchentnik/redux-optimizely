import reporter from 'redux-reporter';

export default reporter(({ type, payload }) => {

    window.optimizely = window.optimizely || [];
    window.optimizely.push(['trackEvent', type, payload]);

}, ({ meta = {} }) => meta.experiments);
