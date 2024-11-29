/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
    return (
        <div className="App">
            <div
                css={css`
                    border: 1px solid #ffffff4d;
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                    min-height: 80vh;
                `}
            >
                <Header />

                <Content />
            </div>
        </div>
    );
}

export default App;
