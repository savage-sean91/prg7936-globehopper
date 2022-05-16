import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <p>&copy;2022 Acme World Travel, Inc.</p>
            </footer>
        );
    }
}

export default Footer;