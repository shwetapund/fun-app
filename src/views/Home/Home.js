import React from 'react'
import Config from './../../utils/config.json'

export default function Home() {
    return (
        <div className='container'>
            <h1 className='text-center' style={{color:Config.theme.primaryColor}}>{Config.title}</h1>
            <p className='text-center'>{Config.description}</p>

            <h1>Services</h1>
            {
                Config.services.map((serviceData, index) => {
                    const {title, description, price} = serviceData
                    return(
                        <div className='card m-3' key={index}>
                            <div className='card-body'>
                                <h3 className='title'>{title}</h3>
                                <p className='text'>{description}</p>
                                <p className='text'>Price : {price}</p>
                                </div>
                            </div>
                    )

                })
            }
        </div>
    )
}
