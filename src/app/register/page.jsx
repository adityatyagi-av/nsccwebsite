"use client"
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/input';
import InputRadio from '@/components/inputRadio';
import InputSelect from '@/components/inputSelect';
import { Button } from '@nextui-org/react';
const page = () => {
    
    const validationSchema = Yup.object({
        name: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
        
      email: Yup.string().email('Invalid email address').required('Required'),
      id: Yup.string()
        .max(12, 'Must be 12 characters or less')
        .required('Required'),
        whatsappNumber: Yup.string()
        .matches(/^[0-9]{10}$/, '10 digit mobile number should be entered')
        .required('Required'),
          gender: Yup.string().required('Required'),
          branch: Yup.string().required('Required'),  
          residence: Yup.string().required('Required'),  
          domain: Yup.string().required('Required'),     
          // resume: Yup.mixed()
          // .test('fileFormat', 'Invalid file format. Only PDF or DOCX are allowed.', (value) => {
          //   if (!value) return true;
          //   const allowedFormats = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
          //   return value && allowedFormats.includes(value.type);
          // })
          // .test('fileSize', 'File size must be less than 10MB', (value) => {
          //   if (!value) return true;
          //   return value && value.size <= 10 * 1024 * 1024;
          // })
          // .required('Resume is required'),
         
      });
      const formik = useFormik({
        initialValues: {
          name: '',
          whatsappNumber:'',
          id:'',
          email: '',
          gender:'',
          branch:'',
          residence:'',
          domain:'',
          // resume: null,
          
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values, null, 2));
          // console.log(JSON.stringify(values, null, 2));
    
        },
      });
      const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
      ];
      const residenceOptions = [
        { label: 'Day Scholar', value: 'dayscholar' },
        { label: 'Hosteller', value: 'hosteller' }
      ];
      const branchOptions = [
        { label: 'CSE', value: 'cse' },
        { label: 'CS', value: 'cs' },
        { label: 'IT', value: 'it' },
        { label: 'CSIT', value: 'csit' },
        { label: 'CSAI', value: 'csai' },
        { label: 'CSE (AI/ML)', value: 'cseaiml' },
        { label: 'ECE', value: 'ece' },
        { label: 'ME', value: 'me' },
        { label: 'EEE', value: 'eee' },
      ];
      const domainOptions = [
        { label: 'AI / ML', value: 'aiml' },
        { label: 'Android Development', value: 'android' },
        { label: 'AR / VR', value: 'arvr' },
        { label: 'Cloud Computing', value: 'cloud' },
        { label: 'Devops', value: 'devops' },
        { label: 'Graphic Designing', value: 'graphics' },
        { label: 'UI / UX', value: 'uiux' },
        { label: 'Web Development', value: 'webdev' }
      ];
    
    
  return (
    <>
    
    <div className='max-w-screen-md mx-auto my-10'>
    <h2 className="max-w-lg mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
            <span className="relative inline-block">
            
              <span className="relative">JOIN OUR <span className='text-blue-700'>CORE TEAM</span> </span>
            </span>{' '}
            
          </h2>
      <form onSubmit={formik.handleSubmit} className='mx-2'>
      
        <Input className="mt-4" value="name" label="Enter your Name" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />
      
        <Input value="email" label="Your Email" placeHolder="adityatyagi@gmail.com" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email"/>

        <Input className="mt-4" value="id" label="Enter your ID" placeHolder="2125cs1001" formikTouched={formik.touched.id} formikError={formik.errors.id} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.id} type="text" />
    
        <Input value="whatsappNumber" label="Whatsapp Number" placeHolder="8088088088" formikTouched={formik.touched.whatsappNumber} formikError={formik.errors.whatsappNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.whatsappNumber} type="tel"/>
             
        <InputRadio value="gender" label="Gender" options={genderOptions} formikTouched={formik.touched.gender} formikError={formik.errors.gender} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

  
        <InputSelect value="branch" label="Select your Branch" options={branchOptions} formikTouched={formik.touched.branch} formikError={formik.errors.branch} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

        <InputRadio value="residence" label="Day Scholar or Hosteller" options={residenceOptions} formikTouched={formik.touched.residence} formikError={formik.errors.residence} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
        
        <InputSelect value="domain" label="Select your Domain" options={domainOptions} formikTouched={formik.touched.branch} formikError={formik.errors.domain} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
        
        <Button color='primary' type='submit' >Register</Button>
      </form>
    </div>
    </>
  )
}

export default page
