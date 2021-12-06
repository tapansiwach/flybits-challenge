import React, { useRef } from 'react'
import './Form.scss'
import { addOffer } from '../firebase/db'

export default function Form() {
  const bankRef = useRef();
  const addressRef = useRef();
  const latRef = useRef();
  const lngRef = useRef();
  const radiusRef = useRef();
  const imgSrcRef = useRef();
  const captionRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      bank: bankRef.current.value,
      address: addressRef.current.value,
      lat: Number(latRef.current.value),
      lng: Number(lngRef.current.value),
      radius: Number(radiusRef.current.value),
      imgSrc: imgSrcRef.current.value,
      caption: captionRef.current.value
    }
    // validate data, then...
    await addOffer(data);

    bankRef.current.value = "";
    addressRef.current.value = "";
    latRef.current.value = "";
    lngRef.current.value = "";
    radiusRef.current.value = "";
    imgSrcRef.current.value = "";
    captionRef.current.value = "";
  }

  return (
    <>
      <header className='promotion-form-header'>
        <h1>New Promotion</h1>
        <p><em>Fill out this form to create a new promotion for users.</em></p>
      </header>
      <form className="promotion-form">
        <div className="form-row">
          <label htmlFor="bank">Bank</label>
          <input type="text" name="bank" id="bank" ref={bankRef} />
        </div>
        <div className="form-row">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" ref={addressRef} />
        </div>
        <div className="form-row">
          <label htmlFor="lat">Latitude</label>
          <input type="text" name="lat" id="lat" ref={latRef} />
        </div>
        <div className="form-row">
          <label htmlFor="lng">Longitude</label>
          <input type="text" name="lng" id="lng" ref={lngRef} />
        </div>
        <div className="form-row">
          <label htmlFor="radius">Zone Radius</label>
          <input type="text" name="radius" id="radius" ref={radiusRef} />
        </div>
        <div className="form-row">
          <label htmlFor="imgSrc">Image URL</label>
          <textarea name="imgSrc" id="imgSrc" ref={imgSrcRef}></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="caption">Caption</label>
          <textarea name="caption" id="caption" ref={captionRef}></textarea>
        </div>
        <div className="form-row">
          <button
            type="submit"
            onClick={onSubmit}
          >Submit</button>
        </div>
      </form>
    </>
  )
}

// sample data


