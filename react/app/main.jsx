import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/index.less';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.info
        };
    }

    render() {
        return (
            <div className={styles.title}>
                <div>{this.state.info.name}</div>
                <div>{this.state.info.age}</div>
                <div>{this.state.info.height}</div>
                <div></div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <HelloWorld info={{name: 'Leslie',age: '17',height: 70}}></HelloWorld></div>,
    document.getElementById('container'))