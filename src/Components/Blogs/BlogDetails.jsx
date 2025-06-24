
import React, { useEffect, useState } from 'react'
import './Blogdetails.css';
import HomeNavbar from '../HomeNavbar';
import Footer from '../Footer';
import Blogsdata from "../JSON/Blogsdata.json"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SlugPropertyDetails } from '../../reducers/propertyReducer'
import WhatsappAction from '../WhatsappAction';

const BlogDetails = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const slugDetails = useParams().slug;

    const dispatch = useDispatch();

    const [PropertyDetails, setPropertyDetails] = useState(null)
    console.log("PropertyDetails", PropertyDetails)
    console.log("Blogsdatafghj", Blogsdata)

    const BlogsdataJSON = Blogsdata;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (slugDetails) {
            const data = BlogsdataJSON?.filter(item => item.slug === slugDetails)[0]
            console.log("data", data)
            setPropertyDetails(data)
            dispatch(SlugPropertyDetails(data))
        }
    }, [slugDetails])

    const propertyData = useSelector(state => state?.property?.propertyData)
    console.log("propertyData", propertyData)
    return (
        <>
            <div className="BlogDetails-main-parent ">
                <HomeNavbar />
                <div className='BlogDEtailsInner-parent position-relative'>
                    {/* {propertyData.map((i,index)=>( */}
                    <div className='Blogdetails-main-head '>
                        <div className="Blogdetails-img-main">
                            <img src={PropertyDetails?.mainimage} alt="" />
                        </div>
                        <div className="BlogDetails-Finibus-Bonorum-line-main">
                            <div className="BlogDetails-Finibus-Bonorum-line-head-sub">
                                <h2>{PropertyDetails?.title} </h2>
                                <p>Written by Global Edifice</p>
                                <hr />
                            </div>
                            <div className="BlogDetails-Finibus-Bonorum-sub-lines">
                                <p>{PropertyDetails?.description} </p>
                                <h5>{PropertyDetails?.subtitle1}</h5>
                                <p>{PropertyDetails?.description1} </p>
                                <h6>{PropertyDetails?.subtitle2}</h6>
                                <p>{PropertyDetails?.description2}</p>
                                <h6>{PropertyDetails?.subtitle3} </h6>
                                <p>{PropertyDetails?.description3} </p>
                                <h6>{PropertyDetails?.subtitle4}</h6>
                                <p>{PropertyDetails?.description4}</p>
                                <h6>{PropertyDetails?.subtitle5}</h6>
                                <p>{PropertyDetails?.description5}</p>
                                <h6>{PropertyDetails?.subtitle6}</h6>
                                <p>{PropertyDetails?.description6sub1}</p>
                                <p>{PropertyDetails?.description6sub2}</p>
                                <p>{PropertyDetails?.description6sub3}</p>
                            </div>
                        </div>
                        <div className='BlogDetails-scrollTop' onClick={scrollTop}>
                            <img src="/scrolltop.svg" alt="" />
                        </div>
                    </div>
                </div>
                <WhatsappAction/>
                <Footer />
            </div>

        </>

    )
}

export default BlogDetails;