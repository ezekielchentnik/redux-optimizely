import reporter from 'redux-reporter';

export default reporter(({ type, payload }) => {

    try {
        window.optimizely = window.optimizely || [];
        window.optimizely.push(['trackEvent', type, payload]);
    } catch (err) {
        console.error(err);
    }

}, ({ meta = {} }) => meta.experiments);
