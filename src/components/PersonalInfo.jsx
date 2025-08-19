import Button from "./Button"
import check from "../assets/check.svg"
import { useState } from "react"

function PersonalInfo(
    {
    setActiveComponent,
    data,
    updatedata
    }
){
    const [formData,updateFormData]=useState(
        {
        fname: data?.personalInfo?.fname || '',
        lname: data?.personalInfo?.lname || '',
        adress: data?.personalInfo?.adress || '',
        email: data?.personalInfo?.email || '',
        phone: data?.personalInfo?.phone || ''
        }
    );
    function handleFormData(e){
        const {name, value}=e.target;
        updateFormData({...formData,[name]:value})
    }
    function handleSubmit(){
        updatedata(prev => ({...( prev || {}),personalInfo : formData}))
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit();
            setActiveComponent('Education')
        }} >
            <label htmlFor="fname" >First Name 
                <input 
                    id="fname"
                    type="text" 
                    name="fname"  
                    value={formData.fname} 
                    onChange={(e)=>{handleFormData(e)}} 
                    required 
                />
            </label>
            <label htmlFor="lname" >Last Name 
                <input 
                    id="lname"
                    type="text" 
                    name="lname"  
                    value={formData.lname} 
                    onChange={(e)=>{handleFormData(e)}} 
                    required 
                />
            </label>
            <label htmlFor="adress" >Adress 
                <input 
                    id="adress"
                    type="text" 
                    name="adress"  
                    value={formData.adress} 
                    onChange={(e)=>{handleFormData(e)}} 
                    required 
                />
            </label>
            <label htmlFor="email" >Email
                <input 
                    id="email"
                    type="email" 
                    name="email"  
                    value={formData.email} 
                    onChange={(e)=>{handleFormData(e)}} 
                    required 
                />
            </label>
            <label htmlFor="phone" >Phone
                <input 
                    id="phone"
                    type="tel" 
                    name="phone"  
                    value={formData.phone} 
                    onChange={(e)=>{handleFormData(e)}} 
                    required 
                />
            </label>
            <Button key='check'
                    image={check}
                    text='Next'
                    classNa={``}
                    isActive={false}
                    isExpanded={true}
                    type="submit"
                    handleClick={null}/>
        </form>
    )
}

export default PersonalInfo