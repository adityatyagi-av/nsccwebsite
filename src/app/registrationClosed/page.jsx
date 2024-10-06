"use client"
import {CircularProgress,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { createClient } from '@supabase/supabase-js';
import {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/input';
import InputRadio from '@/components/inputRadio';
import InputSelect from '@/components/inputSelect';
import { useRouter } from "next/navigation";
const page = () => {
  const router=useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY );
    const validationSchema = Yup.object({
        name: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
        
      email: Yup.string().email('Invalid email address').required('Required'),
      id: Yup.string()
        .max(19, 'Must be 19 characters or less')
        .required('Required'),
        whatsappNumber: Yup.string()
        .matches(/^[0-9]{10}$/, '10 digit mobile number should be entered')
        .required('Required'),
          gender: Yup.string().required('Required'),
          branch: Yup.string().required('Required'),  
          residence: Yup.string().required('Required'),
          laptop: Yup.string().required('Required'),  
         
         
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
          laptop:'',
          
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          onOpen();
          try {
            
            const { data, error } = await supabase
              .from('bootcampregistration') 
              .insert([
                {
                  name: values.name,
                  email: values.email,
                  id: values.id,
                  whatsappNumber: values.whatsappNumber,
                  gender: values.gender,
                  branch: values.branch,
                  residence: values.residence,
                  laptop:values.laptop,
                },
              ]);
        
            if (error) {
              console.error('Error inserting data:', error);
            } else {
              console.log('Data inserted successfully:', data);
              // Redirect to a success page or perform any other action
              setFormSubmitted(true)
              router.push('/succesfull')
            }
          } catch (error) {
            console.error('An error occurred:', error);
            router.push('/notsubmitted')
          }
        },
        
        
      });
     const generalOptions=[
      {
        label:'Yes',value:'yes'},
        {label:'No',value:'no'}
     ]
      const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
      ];
      const residenceOptions = [
        { label: 'Day Scholar', value: 'dayscholar' },
        { label: 'Hosteller', value: 'hosteller' }
      ];
      const branchOptions = [
        {label: 'Select Branch', value: 'select'},
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
     
    
    
  return (
    <>
    <title>Join NSCC KIET | Technical Club Of KIET</title>
    
    <div className='max-w-screen-sm mx-auto my-5'>
    <h2 className="max-w-lg  mx-3 mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
            <span className="relative inline-block">
            
              <span className="relative">Registration <span className='text-blue-700'>Closed</span> </span>
            </span>{' '}
            
          </h2>
      {/* <form onSubmit={formik.handleSubmit} className='mx-2'>
      
        <Input className="mt-4" value="name" label="Enter your Name" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />
      
        <Input value="email" label="Your Email" placeHolder="dhruv.2125cs1130@kiet.edu" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email"/>

        <Input className="mt-4" value="id" label="Enter your Library ID" placeHolder="2125cs1130" formikTouched={formik.touched.id} formikError={formik.errors.id} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.id} type="text" />
    
        <Input value="whatsappNumber" label="Whatsapp Number" placeHolder="8088088088" formikTouched={formik.touched.whatsappNumber} formikError={formik.errors.whatsappNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.whatsappNumber} type="tel"/>
             
        <InputRadio value="gender" label="Gender" options={genderOptions} formikTouched={formik.touched.gender} formikError={formik.errors.gender} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

  
        <InputSelect value="branch" label="Select your Branch" options={branchOptions} formikTouched={formik.touched.branch} formikError={formik.errors.branch} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

        <InputRadio value="laptop" label="Do you have Laptop" options={generalOptions} formikTouched={formik.touched.laptop} formikError={formik.errors.laptop} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

        <InputRadio value="residence" label="Day Scholar or Hosteller" options={residenceOptions} formikTouched={formik.touched.residence} formikError={formik.errors.residence} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
        
       

        <Button color='primary' type='submit'>Register</Button>



      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="mx-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Bootcamp Registration Status</ModalHeader>
              <ModalBody>
                {!formSubmitted?<CircularProgress size="lg" aria-label="Loading..." label="Submitting Form"/>:<><CircularProgress
      label="SuccesFully Submitted"
      size="lg"
      value={100}
      color="success"
      
      showValueLabel={true}
    /></>
    }
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>

      </form> */}
    </div>
    </>
  )
}

export default page
