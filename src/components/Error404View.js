import React from 'react';
import Container from 'react-bootstrap/Container';

class Error404View extends React.Component {
    render() {
        return (
            <Container fluid>
                <h1>Error</h1>
                <p>Something went wrong and we can't display the page you selected</p>
            </Container>
        )
    }
}

export default Error404View;