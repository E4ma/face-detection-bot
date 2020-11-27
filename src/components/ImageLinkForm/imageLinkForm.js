import React from 'react';
import './imageLinkForm.css';



const ImageLinkForm = () => {
    return(
        <div>
            <p className='f4'>
                {'This Bot will detect faces in your pictures. Give it a Try!'}
            </p>
            <div className='center'>
                <div className='form center pa3 br2 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text'></input>
                <button className='w-40 grow f4 link ph3 pv2 dib dark bg-light-yellow'>Detect</button>
                </div>
            </div>
        </div>

    );
}

export default ImageLinkForm;