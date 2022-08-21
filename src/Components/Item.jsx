import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className="pt-4">
           <div className="container px-lg-5">
            <div className="row gx-lg-5">
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center px-4 pb-4 px-lg-5 pb-lg-5 pt-0 pt-lg-0">
                            <div className="d-inline-flex justify-content-center align-items-center display-3 bg-primary bg-gradient text-white rounded mb-4 mt-n4" style={{height:"4rem",width:"4rem"}}><i className="fa-solid fa-layer-group" style={{fontSize:"2rem"}}/>
</div>
                            <h2 className="h4 font-weight-bold">Fresh new layout</h2>
                            <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center px-4 pb-4 px-lg-5 pb-lg-5 pt-0 pt-lg-0">
                            <div className="d-inline-flex justify-content-center align-items-center display-3 bg-primary bg-gradient text-white rounded mb-4 mt-n4" style={{height:"4rem",width:"4rem"}}><i class="fa-solid fa-cloud-arrow-down" style={{fontSize:"2rem"}}></i></div>
                            <h2 className="h4 font-weight-bold">Free to download</h2>
                            <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center px-4 pb-4 px-lg-5 pb-lg-5 pt-0 pt-lg-0">
                            <div className="d-inline-flex justify-content-center align-items-center display-3 bg-primary bg-gradient text-white rounded mb-4 mt-n4" style={{height:"4rem",width:"4rem"}}><i class="fa-solid fa-rectangle-list" style={{fontSize:"2rem"}}></i></div>
                            <h2 className="h4 font-weight-bold">Jumbotron hero header</h2>
                            <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center px-4 pb-4 px-lg-5 pb-lg-5 pt-0 pt-lg-0">
                            <div className="d-inline-flex justify-content-center align-items-center display-3 bg-primary bg-gradient text-white rounded mb-4 mt-n4" style={{height:"4rem",width:"4rem"}}><i class="fa-brands fa-bootstrap" style={{fontSize:"2rem"}}></i></div>
                            <h2 className="h4 font-weight-bold">Feature boxes</h2>
                            <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center px-4 pb-4 px-lg-5 pb-lg-5 pt-0 pt-lg-0">
                            <div className="d-inline-flex justify-content-center align-items-center display-3 bg-primary bg-gradient text-white rounded mb-4 mt-n4" style={{height:"4rem",width:"4rem"}}><i class="fa-solid fa-code" style={{fontSize:"2rem"}}></i></div>
                            <h2 className="h4 font-weight-bold">Simple clean code</h2>
                            <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center px-4 pb-4 px-lg-5 pb-lg-5 pt-0 pt-lg-0">
                            <div className="d-inline-flex justify-content-center align-items-center display-3 bg-primary bg-gradient text-white rounded mb-4 mt-n4" style={{height:"4rem",width:"4rem"}}><i class="fa-solid fa-circle-check" style={{fontSize:"2rem"}}></i></div>
                            <h2 className="h4 font-weight-bold">A name you trust</h2>
                            <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
      </div>
    )
  }
}
