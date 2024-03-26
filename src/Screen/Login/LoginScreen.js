import {Button, Divider, Input} from 'antd-mobile'
import './LoginScreen.css'

import React, {Component, useState} from 'react';
import { NavBar} from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import {TikTokOutlined, WechatOutlined, WeiboOutlined} from "@ant-design/icons";


function Passowrd() {
    const [visible, setVisible] = useState(false)
    return (
        <div className="password">
            <Input
                className="input"
                placeholder='请输入密码'
                type={visible ? 'text' : 'password'}
            />
            <div className="eye">
                {!visible ? (
                    <EyeInvisibleOutline onClick={() => setVisible(true)}/>
                ) : (
                    <EyeOutline onClick={() => setVisible(false)}/>
                )}
            </div>
        </div>
    );
}

class LoginScreen extends Component {


    render() {
        return (
            <div>
                <div className="header">
                    <NavBar backArrow={false}>
                        <span className="bold-center-text">Login</span>

                    </NavBar>

                </div>
                <div className="content">
                    <Input placeholder='请输入手机号码' clearable/>
                    <Divider/>
                    <Passowrd/>
                    <Divider/>
                    <Button block color='primary' size='large'>验证登录</Button>
                </div>

                <div className="footer">
                    <Divider>其它登录方式</Divider>
                    <div className="login-method">
                        <WechatOutlined style={{ fontSize: '0.64rem', color: 'green' }}/>
                        <WeiboOutlined style={{ fontSize: '0.64rem', color: 'red' }}/>
                        <TikTokOutlined style={{ fontSize: '0.64rem', color: 'black' }}/>
                    </div>
                    <div className="privacy">
                        <Divider>登录即代表您同意<a href="/privacy">StairInDespair隐私政策</a>。</Divider>
                    </div>
                </div>
            </div>

        );
    }
}

export default LoginScreen;