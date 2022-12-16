import React, { Component } from 'react'

export default class Update extends Component {
  render() {
    return (
      <div>
        <form action="">
          <strong htmlFor="basic-url" className="form-label">更新短网址</strong>
          <div className="input-group mb-3" style={{ margin: "10px 0" }}>
            <span className="input-group-text" id="basic-addon3">https://xxx.com/</span>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
              placeholder='补全短网址' />
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
          <button type="button" class="btn btn-outline-dark">更新</button>
        </form>
      </div>
    )
  }
}
