import React from 'react'
import Product from './Product'

const Products_list = () => {
  return (
    <div className='products'>
        <Product name="Levis Jeans" price="Rs. 2000" url="https://rukminim1.flixcart.com/image/850/1000/l4zxn680/jean/u/z/3/32-18298-1256-levi-s-original-imagfrtwbdpke7nq.jpeg?q=90"/>
        <Product name="Samsung M51" price="Rs. 34000" url="https://rukminim1.flixcart.com/image/850/1000/kfeamq80/mobile/y/s/f/samsung-galaxy-m51-sm-m515fzbd-original-imafvvgft9cgdrsz.jpeg?q=90"/>
        <Product name="Dell Monitor" price="Rs. 10000" url="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u4323qe/media-gallery/gray/monitor-u4323qe-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=816&qlt=100,1&resMode=sharp2&size=816,804&chrss=full"/>
    </div>
  )
}

export default Products_list