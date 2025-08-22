import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"
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
        phone: data?.personalInfo?.phone || '',
        socials: data?.personalInfo?.socials || [{platform:'', url:''}]
        }
    );
    function handleFormData(e){
        const {name, value}=e.target;
        updateFormData({...formData,[name]:value})
    }

    function handleSocialChange(index, e) {
        const { name, value } = e.target;
        const updated = [...formData.socials];
        updated[index][name] = value;
        updateFormData((prev) => ({ ...prev, socials: updated }));
      }
    
      function addSocial() {
        updateFormData((prev) => ({
          ...prev,
          socials: [...prev.socials, { platform: "", url: "" }],
        }));
      }
    
      function removeSocial(index) {
        updateFormData((prev) => ({
          ...prev,
          socials: prev.socials.filter((_, i) => i !== index),
        }));
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

            <label htmlFor="socials">Socials
            {formData.socials.map((social, index) => (
                <div key={index}>
                <input
                    type="text"
                    name="platform"
                    value={social.platform}
                    onChange={(e) => handleSocialChange(index, e)}
                    placeholder="Platform (e.g. LinkedIn)"
                />
                <input
                    type="url"
                    name="url"
                    value={social.url}
                    onChange={(e) => handleSocialChange(index, e)}
                    placeholder="Profile URL"
                />
                {formData.socials.length > 1 && (
                <Button
                    type="button"
                    handleClick={() => removeSocial(index)}
                    image={remove}
                    text="Delete Social"
                    classNa=""
                    isActive={false}
                    isExpanded={false}
                    key="delete"
                />)}
                </div>
            ))}
            </label>
            <Button
                type="button"
                handleClick={addSocial}
                image={add}
                text="Add Social"
                classNa=""
                isActive={false}
                isExpanded={true}
                key="add"
            />

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