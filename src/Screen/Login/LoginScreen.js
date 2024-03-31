import {AutoCenter, Button, Divider, Form, Input} from 'antd-mobile'
import React, {useState} from 'react';
import { NavBar} from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import {TikTokOutlined, WechatOutlined, WeiboOutlined} from "@ant-design/icons";
import './LoginScreen.css'
import {pPattern, phPattern} from '../../utils/reg.js'


function Password({value, onChange}) {
    const [visible, setVisible] = useState(false)
    return (
        <div className="password">
            <Input
                className="input"
                placeholder='请输入密码'
                type={visible ? 'text' : 'password'}
                value={value}
                onChange={onChange}
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



function LoginForm() {
    const [form] = Form.useForm()
    const [password,setPassword] = useState('')
    const handleSubmit = async () => {
        const values = await form.validateFields();
        console.log('Submitting:', values);
        // 这里可以添加更多的逻辑，例如调用API
    };
    return (
        <Form
            className="login-form"
            form={form}
            onFinish={handleSubmit}
            footer={
            <Button block type='submit' color='primary' size='large' >
                登录
            </Button>
            }

        >
            <Form.Item
                name="phone_number"
                rules={
                    [
                        {required:true, message:"请输入手机号码"},
                        {pattern: phPattern, message:"手机号码格式不正确"}

                    ]
                }
            >
                <Input placeholder= "请输入手机号码" clearable>

                </Input>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{required: true, message: '必填'},{pattern: pPattern, message: '密码格式不正确, 8-16位字符'}]}
            >
                <Password value={password} onChange={(e) => {

                    setPassword(e);
                }}
                />
            </Form.Item>
        </Form>
    );
}

function LoginScreen() {

        return (
            <div>
                <div className="header">
                    <NavBar backArrow={false}>
                        <span className="bold-center-text">Login</span>
                    </NavBar>
                </div>
                <LoginForm></LoginForm>
                <AutoCenter className="register-text">没有账号，<a href="/register">现在注册</a> </AutoCenter>
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


export default LoginScreen;