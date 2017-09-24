import createHistory from 'history/createBrowserHistory';

function historyProvider() {
    const history = createHistory();

    return {
        getHistory,
        navigateTo,
    };

    function getHistory() {
        return history;
    }

    function navigateTo(url: string) {
        history.push(url);
    }
};

export default historyProvider();
