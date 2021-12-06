import React from 'react'
import './Form.scss'

export default function Form() {
  return (
    <>
      <header className='promotion-form-header'>
        <h1>New Promotion</h1>
        <p><em>Fill out this form to create a new promotion for users.</em></p>
      </header>
      <form action="" method="get" className="promotion-form">
        <div className="form-row">
          <label htmlFor="bank">Bank</label>
          <input type="text" name="bank" id="bank" />
        </div>
        <div className="form-row">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
        <div className="form-row">
          <label htmlFor="lat">Latitude</label>
          <input type="text" name="lat" id="lat" />
        </div>
        <div className="form-row">
          <label htmlFor="lng">Longitude</label>
          <input type="text" name="lng" id="lng" />
        </div>
        <div className="form-row">
          <label htmlFor="radius">Zone Radius</label>
          <input type="text" name="radius" id="radius" />
        </div>
        <div className="form-row">
          <label htmlFor="imgSrc">Image URL</label>
          <textarea name="imgSrc" id="imgSrc"></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="caption">Caption</label>
          <textarea name="caption" id="caption"></textarea>
        </div>
        <div className="form-row">
          <button>Submit</button>
        </div>
      </form>
    </>
  )
}

// sample data


