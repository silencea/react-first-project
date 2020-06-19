import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button } from 'antd';
import './login.less'
import axios from 'axios'

export default function Login() {
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const history = useHistory();
    return <Form className="login-form">
        <Form.Item>
            <Input placeholder="请输入用户名"
                maxLength={6}
                type="text"
                onChange={(event) => {
                    setName(event.target.value)
                }}
            />
        </Form.Item>

        <Form.Item>
            <Input placeholder="请输入密码" maxLength={6} type="password"
                onChange={(event) => {
                    setPwd(event.target.value)
                }}
            />
        </Form.Item>
        <Form.Item >
            <Button type="primary" onClick={() => {
                login(name, pwd).then((response) => {
                    let res = response.data;
                    if (res.code === 0) {
                        history.push('/home');
                    }
                })
            }} >登陆</Button>
        </Form.Item>
    </Form>
}

function login(name, pwd) {
    return axios.get("./login.json", {
        params: {
            name, pwd
        }
    })
}

