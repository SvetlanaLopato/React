import React from 'react';
import { withRouter } from 'react-router';

import './BackToSearchButton.less';

interface BackToSearchButtonProps {
    history: any;
}

class BackToSearchButtonContainer extends React.Component<BackToSearchButtonProps, {}> {
    private onBackToSearchButtonClick = (): void => {
        const defaultSearchUrl: string = '/search';

        this.props.history.push(defaultSearchUrl);
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

const BackToSearchButton = withRouter(BackToSearchButtonContainer);

export default BackToSearchButton;
