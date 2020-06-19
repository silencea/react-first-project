import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './home.less'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>欢迎来到德莱联盟</h1>
                <Link to="/login">去登陆</Link>
                <br/>
                <Link to="/detail">看详情</Link>
                <br/>
                <Link to="/detailClass">看class详情</Link>
            </div>
        )
    }
}
