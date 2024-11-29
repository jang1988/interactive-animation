/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export default function Header() {
    return (
        <div
            css={css`
                border-bottom: 1px solid #ffffff4d;
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-height: 68px;
            `}
        >
            <div
                css={css`
                    display: flex;
                `}
            >
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        padding: 29px;
                    `}
                >
                    <span
                        css={css`
                            width: 42px;
                            height: 1px;
                            background: #fff;
                            margin-bottom: 9px;
                        `}
                    ></span>
                    <span
                        css={css`
                            width: 42px;
                            height: 1px;
                            background: #fff;
                        `}
                    ></span>
                </div>
                <div
                    css={css`
                        display: flex;
                    `}
                >
                    <svg
                        width="200"
                        height="68"
                        viewBox="0 0 200 68"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.58016 0L0 8.99688L0 17.9898L0 20.8841L0 45.5533L0 59.0031L8.58016 68L191.42 68L200 59.0031V23.4715L98.1937 23.4715L98.1937 44.3566L180.083 44.3566V47.1149L19.9168 47.1149L19.9168 20.8841L200 20.8841V8.99688L191.42 0L8.58016 0Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <div
                css={css`
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #ffffff;
                    display: flex;
                    gap: 30px;
                `}
            >
                <div>Послуги</div>
                <div>Проєкти</div>
                <div>Про нас</div>
                <div>Цікава аналітика</div>
                <div>Контакти</div>
            </div>
            <div
                css={css`
                    background-color: #71c575;
                    padding: 22px;
                    border-radius: 10px 10px 0 0;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: -0.02em;
                    color: #000;
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 25px 100%, 0 calc(100% - 25px));
                `}
            >
                <span
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <svg
                        width="24"
                        height="26"
                        viewBox="0 0 24 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.51644 2.90942L11.4302 8.7207L6.51644 14.532"
                            stroke="black"
                        />
                        <path d="M0.0253894 8.49561L11.5978 8.54639" stroke="black" />
                        <path
                            d="M16.7246 10.9094L11.8108 16.7207L16.7246 22.532"
                            stroke="black"
                        />
                        <path d="M23.2156 16.4956L11.6432 16.5464" stroke="black" />
                    </svg>
                </span>
                <span>Консультація</span>
            </div>
        </div>
    );
}
