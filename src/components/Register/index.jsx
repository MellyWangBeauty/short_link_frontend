import React, { Component } from 'react'
import classnames from 'classnames';
import './index.css'

export default class Register extends Component {
    state = {
        userInfo: {
            userName: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        errMsg: [],
    };

    handleSubmit = e => {
        e.preventDefault();

        window.alert("注册成功！")
    };

    render() {
        return (
            <div className='content'>
                <form onSubmit={this.handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">用户名</label>
                        <input type="text"
                            className={classnames("form-control")}
                            id="userName"
                            name="userName"
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">邮箱</label>
                        <input type="email"
                            className={classnames("form-control")}
                            id="email"
                            aria-describedby="emailHelp"
                            name="email"
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">密码</label>
                        <input type="password"
                            className={classnames("form-control")}
                            id="password"
                            name="password"
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordConfirm" className="form-label">确认密码</label>
                        <input type="password"
                            className={classnames("form-control")}
                            id="passwordConfirm"
                            name="passwordConfirm"
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordConfirm" className="form-label">密保问题一</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>请选择密保问题一</option>
                            <option value="1">您小学班主任的名字是？</option>
                            <option value="2">您最熟悉的童年好友名字是？</option>
                            <option value="3">对您影响最大的人名字是？</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="passwordConfirm" className="form-label">Password Confirm</label> */}
                        <input type="password"
                            className={classnames("form-control")}
                            id="passwordConfirm"
                            name="passwordConfirm"
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordConfirm" className="form-label">密保问题二</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>请选择密保问题二</option>
                            <option value="1">您的学号（或工号）是？</option>
                            <option value="2">您母亲的生日是？</option>
                            <option value="3">您高中班主任的名字是？</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="passwordConfirm" className="form-label">Password Confirm</label> */}
                        <input type="password"
                            className={classnames("form-control")}
                            id="passwordConfirm"
                            name="passwordConfirm"
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">点击注册</button>
                </form>
            </div>
        )
    }
}
