import React, { Component } from 'react';
import { NavBar,Button,Input,Divider} from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import {TikTokOutlined, WechatOutlined, WeiboOutlined} from "@ant-design/icons";
import './RegisterScreen.css';
import { useState } from 'react';

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

//regisiter function

// function RegisterForm(){
//
// }

class RegisterScreen extends Component {


    render(){
        return(
            <div>
                <div className="header">
                    <NavBar backArrow={false}>
                        <span className="bold-center-text">注册</span>
                    </NavBar>
                </div>
                <div className="content">
                    <Input placeholder='请输入您的昵称' clearable/>
                    <Divider/>
                    <Input placeholder='请输入您的邮箱(可选)' clearable/>
                    <Divider/>
                    <Input placeholder='请输入手机号码(登录凭证)' clearable/>
                    <Divider/>
                    <Passowrd/>
                    <Divider/>
                    <Button block color='primary' size='large' >注册</Button>
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
        )
    }


}



export default RegisterScreen;