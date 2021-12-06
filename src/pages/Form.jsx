import React from 'react'
import './Form.scss'

export default function Form() {
  return (
    <>
      <header class='promotion-form-header'>
        <h1>New Promotion</h1>
        <p><em>Fill out this form to create a new promotion for users.</em></p>
      </header>
      <form action="" method="get" class="promotion-form">
        <div class="form-row">
          <label for="bank">Bank</label>
          <input type="text" name="bank" id="bank" />
        </div>
        <div class="form-row">
          <label for="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
        <div class="form-row">
          <label for="lat">Latitude</label>
          <input type="text" name="lat" id="lat" />
        </div>
        <div class="form-row">
          <label for="lng">Longitude</label>
          <input type="text" name="lng" id="lng" />
        </div>
        <div class="form-row">
          <label for="radius">Zone Radius</label>
          <input type="text" name="radius" id="radius" />
        </div>
        <div class="form-row">
          <label for="imgSrc">Image URL</label>
          <textarea name="imgSrc" id="imgSrc"></textarea>
        </div>
        <div class="form-row">
          <label for="caption">Caption</label>
          <textarea name="caption" id="caption"></textarea>
        </div>
        <div class="form-row">
          <button>Submit</button>
        </div>
      </form>
    </>
  )
}
