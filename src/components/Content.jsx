/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function Content() {
    return (
        <div
            css={css`
                display: flex;
            `}
        >
            <div
                css={css`
                    background: #00000080;
                    width: 99px;
                    height: 100%;
                    min-height: 80vh;
                    border-radius: 0 0 0 10px;
                    border-right: 1px solid #ffffff4d;
                `}
            ></div>
            <div
                css={css`
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    width: 100%;
                `}
            >
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        padding: 50px;
                    `}
                >
                    <div
                        css={css`
                            font-size: 72px;
                            font-weight: 700;
                            line-height: 90px;
                            letter-spacing: -0.02em;
                            color: #71c575;
                            text-transform: uppercase;
                        `}
                    >
                        Керуємо
                    </div>

                    <div
                        css={css`
                            font-size: 72px;
                            font-weight: 700;
                            line-height: 90px;
                            letter-spacing: -0.02em;
                            color: #f4f4f4;
                            text-transform: uppercase;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        `}
                    >
                        <div>НЕРУХОМІСТЮ</div>
                        <div>щоб ви нудьгували</div>
                    </div>
                </div>

                <div
                    css={css`
                        max-width: 170px;
                        padding: 70px 30px;
                    `}
                >
                    <div
                        css={css`
                            font-size: 14px;
                            font-weight: 400;
                            line-height: 22px;
                            letter-spacing: -0.02em;
                            color: #ffffff;
                            margin-bottom: 50px;
                        `}
                    >
                        GLADSAL генерує умови за якими нерухомість стає прибутковіше та дорожче
                    </div>
                    <div
                        css={css`
                            display: flex;
                            gap: 10px;
                            align-items: center;
                        `}
                    >
                        <div
                            css={css`
                                width: 40px;
                                height: 40px;
                                background: #ffffff0d;
                                border-radius: 5px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            `}
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.725 2.90942L5.81128 8.7207L10.725 14.532"
                                    stroke="white"
                                />
                                <path d="M17.2161 8.49561L5.64368 8.54639" stroke="white" />
                            </svg>
                        </div>

                        <div
                            css={css`
                                width: 40px;
                                height: 40px;
                                background: #ffffff0d;
                                border-radius: 5px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border: 1px solid #fff;
                            `}
                        >
                            <svg
                                style={{ display: 'flex' }}
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.51641 2.90942L11.4302 8.7207L6.51641 14.532"
                                    stroke="white"
                                />
                                <path d="M0.0253589 8.49561L11.5978 8.54639" stroke="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
