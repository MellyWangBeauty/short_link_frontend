import React, { Component } from 'react'
import './index.css'

export default class Home extends Component {
    render() {
        return (
            <form action="">
                <strong htmlFor="basic-url" className="form-label">原始网址</strong>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                        placeholder='在此输入想要缩短的网址' />
                    <button type="button" class="btn btn-outline-dark">缩短</button>
                </div>
                <strong htmlFor="basic-url" className="form-label">自定义短链（可选）</strong>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">https://xxx.com/</span>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                        placeholder='字母、数字，5-15位' />
                </div>
                <strong htmlFor="basic-url" className="form-label">备注（可选）</strong>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                        placeholder='短链接备注' />
                </div>
                <strong htmlFor="basic-url" className="form-label">有效期自（可选）</strong>
                <div className="input-group mb-3">
                    <input type="datetime-local" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                        placeholder='留空表示不限制' />
                </div>
                <strong htmlFor="basic-url" className="form-label">有效期自（可选）</strong>
                <div className="input-group mb-3">
                    <input type="datetime-local" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                        placeholder='留空表示不限制' />
                </div>
            </form>
        )
    }
}
