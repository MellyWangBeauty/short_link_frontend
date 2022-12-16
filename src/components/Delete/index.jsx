import React, { Component } from 'react'

export default class Delete extends Component {
  render() {
    return (
      <div>
        <form action="">
          <strong htmlFor="basic-url" className="form-label">还原短网址</strong>
          <div className="input-group mb-3" style={{ margin: "10px 0" }}>
            <span className="input-group-text" id="basic-addon3">https://xxx.com/</span>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
              placeholder='补全短网址' />
            <button type="button" class="btn btn-outline-dark">还原</button>
          </div>
        </form>
      </div>
    )
  }
}
