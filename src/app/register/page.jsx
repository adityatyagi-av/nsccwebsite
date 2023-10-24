"use client"

import {CircularProgress,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { createClient } from '@supabase/supabase-js';
import {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/input';
import InputRadio from '@/components/inputRadio';
import InputSelect from '@/components/inputSelect';

import InputTextArea from '@/components/inputTextArea';
import { useRouter } from "next/navigation";
const page = () => {
  const router=useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
const supabase = createClient('https://yiliuqjfmacevlslkaiw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbGl1cWpmbWFjZXZsc2xrYWl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5NzQyNjgsImV4cCI6MjAxMzU1MDI2OH0.uGzaKOKEh5mhC6Pe3jRwd-qUOaSyyz0tGpEI2XbcvRo');
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
          domainProficiency:Yup.number().required('Required'),
          github:Yup.string()
          .url('Invalid URL format'),
          linkedin:Yup.string()
          .url('Invalid URL format')
          .required('Link is required'),
          link:Yup.string()
          .url('Invalid URL format'),
          experience:Yup.string()
          .required('Required'),
          commitment: Yup.string().required('Required'),
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
          domainProficiency:'',
          github:'',
          linkedin:'',
          link:'',
          experience:'',
          commitment:'',
          // resume: null,
          
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          onOpen();
          try {
            
            const { data, error } = await supabase
              .from('coreteamthirdyear') 
              .insert([
                {
                  name: values.name,
                  email: values.email,
                  id: values.id,
                  whatsappNumber: values.whatsappNumber,
                  gender: values.gender,
                  branch: values.branch,
                  residence: values.residence,
                  domain: values.domain,
                  domainProficiency: values.domainProficiency,
                  github: values.github,
                  linkedin: values.linkedin,
                  link: values.link,
                  experience: values.experience,
                  commitment: values.commitment,
                },
              ]);
        
            if (error) {
              console.error('Error inserting data:', error);
            } else {
              console.log('Data inserted successfully:', data);
              // Redirect to a success page or perform any other action
              setFormSubmitted(true)
              router.push('/submitted')
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        },
        
        
      });
      const generalOptions = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
      ];
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
      const proficiencyOptions = [
        { label: 5, value: 5 },
        { label: 4, value: 4 },
        { label: 3, value: 3 },
        { label: 2, value: 2 },
        { label: 1, value: 1 },
       

        
      ];
    
    
  return (
    <>
    
    <div className='max-w-screen-sm mx-auto my-10'>
    <h2 className="max-w-lg  mx-3 mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
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
        <InputRadio value="domainProficiency" label="How much you are proficient in your selected Domain" options={proficiencyOptions} formikTouched={formik.touched.domainProficiency} formikError={formik.errors.domainProficiency} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
        
        <Input className="mt-4" value="github" label="Github Profile Link" placeHolder="https://github.com/adityatyagi-av" formikTouched={formik.touched.github} formikError={formik.errors.github} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.github} type="text" />

        <Input className="mt-4" value="linkedin" label="Linkedin Profile Link" placeHolder="https://www.linkedin.com/in/adityatyagiav/" formikTouched={formik.touched.linkedin} formikError={formik.errors.linkedin} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.linkedin} type="text" />

        <Input className="mt-4" value="link" label="Any other Profile Link to share" placeHolder="https://www.behance.net/abhinavfs" formikTouched={formik.touched.link} formikError={formik.errors.link} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.link} type="text" />

        <InputTextArea value="experience" label="Why you want to join NSCC ?" placeHolder="" formikTouched={formik.touched.experience} formikError={formik.errors.experience} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.experience} />
        
        <InputRadio value="commitment" label="Would you be able to commit your time and effort to work on live projects as a core team member of NSCC KIET?" options={generalOptions} formikTouched={formik.touched.commitment} formikError={formik.errors.commitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


        <Button color='primary' type='submit' >Register</Button>



      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="mx-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                {formSubmitted?<CircularProgress size="lg" aria-label="Loading..." label="Submitting Form"/>:<><CircularProgress
      label="SuccesFully Submitted"
      size="lg"
      value={100}
      color="success"
      
      showValueLabel={true}
    /></>
    }
              </ModalBody>
              <ModalFooter>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      </form>
    </div>
    </>
  )
}

export default page
