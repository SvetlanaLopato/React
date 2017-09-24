import React from 'react';
import './BackToSearchButton.less';
import historyProvider from 'helper/historyProvider';

export default class BackToSearchButton extends React.Component {
    private onBackToSearchButtonClick = (): void => {
        const defaultSearchUrl = '/search';

        historyProvider.navigateTo(defaultSearchUrl);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="search-button back-to-search-button"
                    onClick={this.onBackToSearchButtonClick}
                >Search</div>
            </div>
        );
    }
}
