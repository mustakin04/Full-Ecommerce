import React from 'react'
import Container from './Container'
import Card from '../Layout/Card'
import Category from './Category'
import { MdPhoneAndroid } from "react-icons/md";

const BrowseCategory = () => {
  return (
    <div className='py-[75px]'>
        <Container>
            <Card tittle="Categories"></Card>
            <h2 className='font-Inter font-semibold text-[36px] text-black mt-[20px]'>Browse By Category</h2>
            <div className='flex mt-[60px] justify-between'>
                <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
                <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
                <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
                 <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
                <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
                <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
            </div>
        </Container>
    </div>
  )
}

export default BrowseCategory