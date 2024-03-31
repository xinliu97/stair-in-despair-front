import React,{ useState } from 'react';
import {NavBar, Button, Input, Divider, Form} from "antd-mobile";
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import {TikTokOutlined, WechatOutlined, WeiboOutlined} from "@ant-design/icons";
import './RegisterScreen.css';
import {pPattern, phPattern, ePattern, uPattern} from '../../utils/reg.js'

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

//regisiter function

function RegisterForm(){

    const [form] = Form.useForm();
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const values = await form.validateFields();
        console.log('Submitting:', values);
        // 这里可以添加更多的逻辑，例如调用API
    };
    return(
        <Form
            className="register-form"
            form={form}
            onFinish={handleSubmit}
            layout='horizontal'
            footer={
                <Button block type='submit' color='primary' size='large'>
                    注册
                </Button>
            }
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入您的昵称' },{pattern: uPattern, message: '昵称格式不正确, 4-16位字符'}]}
            >
                <Input placeholder='请输入您的昵称' clearable />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: false, message: '请输入您的邮箱' },{pattern: ePattern, message: '邮箱格式不正确'}]}
            >
                <Input placeholder='请输入您的邮箱(可选)' clearable />
            </Form.Item>
            <Form.Item
                name="phone_number"
                rules={[{ required: true, message: '请输入手机号码' },{pattern: phPattern, message: '手机号码格式不正确'}]}
            >
                <Input placeholder='请输入手机号码(登录凭证)' clearable />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: '必填'},{pattern: pPattern, message: '密码格式不正确, 8-16位字符'}]}
            >
                <Password value={password} onChange={(e) => setPassword(e)} />
            </Form.Item>
        </Form>
    )

}

function RegisterScreen(){

        return(
            <div>
                <div className="header">
                    <NavBar backArrow={false}>
                        <span className="bold-center-text">注册</span>
                    </NavBar>
                </div>

                <RegisterForm />

                <div className="footer">
                    <Divider>其它登录方式</Divider>
                    <div className="login-method">
                        <WechatOutlined style={{fontSize: '0.64rem', color: 'green'}}/>
                        <WeiboOutlined style={{fontSize: '0.64rem', color: 'red'}}/>
                        <TikTokOutlined style={{fontSize: '0.64rem', color: 'black'}}/>
                    </div>
                    <div className="privacy">
                        <Divider>登录即代表您同意<a href="/privacy">StairInDespair隐私政策</a>。</Divider>
                    </div>
                </div>
            </div>
        )
}


export default RegisterScreen;