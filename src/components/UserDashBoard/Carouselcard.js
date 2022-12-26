import React from 'react'
import './Carouselcard.css'
function Carouselcard() {
    return (
        <div className='card mx-auto'>
            <div className='d-flex justify-center'>
                <p className='ms-3 mt-3 fw-bold'>Products by revenue</p>
            </div>
            <hr className='solid' />
            <div className='p-3'>
                <div className='d-flex'>
                    <img src="https://media.wired.com/photos/631bb97dd884b4dcc94164e3/master/pass/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg" className='cimage' alt="" />
                    <p className='mt-3 ms-2'>2023 Apple Macbook Air...</p>
                </div>
                <hr className='solid' />
                <div className='d-flex'>
                    <img src="https://cdn1.smartprix.com/rx-inBJw1Pmf-w1200-h1200/nBJw1Pmf.jpg" className='cimage' alt="" />
                    <p className='mt-3 ms-2'>Acer Aspires.</p>
                </div>
                <hr className='solid' />
                <div className='d-flex'>
                    <img src="https://images.anandtech.com/doci/12608/gigabyte_aero_15_1.jpg" className='cimage' alt="" />
                    <p className='mt-3 ms-2'>2022 GigaByte Areo.</p>
                </div>
                <hr className='solid' />
                <div className='d-flex'>
                    <img src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,1&resMode=sharp2&size=3319,2405&chrss=full&imwidth=5000" className='cimage' alt="" />
                    <p className='mt-3 ms-2'>Dell XPS 15 9500.</p>
                </div>
            </div>
        </div>
    )
}

export default Carouselcard