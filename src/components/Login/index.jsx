import React, { Component } from 'react'
import classnames from 'classnames';
import './index.css'

export default class Login extends Component {
    state = {
        userName: '',
        password: '',
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { userName, password } = this.state
        alert(`你输入的用户名是：${userName}，你输入的密码是：${password}`)

        // try {
        //     const response = await fetch(``)
        //     const data = await response.json()
        //     console.log(data.items)
        // } catch (error) {
        //     console.log('请求出错', error)
        // }
    };

    saveFormData = (dataType) => {
        return (event) => {
            this.setState({ [dataType]: event.target.value })
        }
    }

    render() {
        return (
            <div>
                <div className='content'>
                    <form onSubmit={this.handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">用户名</label>
                            <input type="text"
                                className={classnames("form-control")}
                                id="userName"
                                name="userName"
                                required
                                onChange={this.saveFormData('userName')} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">密码</label>
                            <input type="password"
                                className={classnames("form-control")}
                                id="password"
                                name="password"
                                required
                                onChange={this.saveFormData('password')} />
                        </div>
                        <button type="submit" className="btn btn-primary">点击登录</button>
                    </form>
                </div>
            </div>
        )
    }
}
