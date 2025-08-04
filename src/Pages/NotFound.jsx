import React from 'react'

function NotFound() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-danger">404 Error</h3>
                <h6 className="display-6 text-danger">Requested path not found</h6>
            </div>
        </div>
    </div>
  )
}

export default NotFound
