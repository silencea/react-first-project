import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import axios from 'axios'
import './detail.less'

export default class DetailClass extends Component {

    state = {
        data: [],
        index: 0
    }
    componentDidMount() {
        axios.get("./data.json").then((response) => {
            let res = response.data;
            if (res.code === 0) {
                this.setState({
                    data: res.data
                })
            }
        })
    }

    handleClick = (index) => {
        this.setState({
            index
        })
    }

    render() {
        const columns = [
            {
                title: '地区',
                dataIndex: 'area',
                key: 'area',
            },
            {
                title: 'Java',
                dataIndex: 'java',
                key: 'java',
            },
            {
                title: 'Python',
                dataIndex: 'python',
                key: 'python',
            },
            {
                title: 'React',
                dataIndex: 'react',
                key: 'react',
            },
            {
                title: 'Go',
                dataIndex: 'go',
                key: 'go',
            },
            {
                title: 'Ruby',
                dataIndex: 'ruby',
                key: 'ruby',
            }
        ];

        let index = this.state.index;

        return (
            <div className="detail">
                <h1>语言数据大报告</h1>
                <div className="wrap">
                    <div className="nav">
                        <a className={index == 0 ? "checked" : ""} onClick={() => this.handleClick(0)}>语言动态</a>
                        <a className={index == 1 ? "checked" : ""} onClick={() => this.handleClick(1)}>语言地图</a>
                        <a className={index == 2 ? "checked" : ""} onClick={() => this.handleClick(2)}>语言热搜</a>
                        <a className={index == 3 ? "checked" : ""} onClick={() => this.handleClick(3)}>语言播报</a>

                    </div>
                    <p>数据纯属虚构</p>
                    <Table bordered={true} dataSource={this.state.data} columns={columns} />
                    <Link to="/home" className="nav-link">回首页</Link>
                </div>
            </div>
        )
    }
}
