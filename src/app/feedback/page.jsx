"use client"
import {CircularProgress,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { createClient } from '@supabase/supabase-js';
import {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/input';
import { useRouter } from "next/navigation";
import InputTextArea from "@/components/inputTextArea";
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
        feedbackMessage: Yup.string().required("Please provide the feedback")
         
      });
      const formik = useFormik({
        initialValues: {
          name: '',
          whatsappNumber:'',
          id:'',
          email: '',
          message:'',
          feedbackMessage:'',
          
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          onOpen();
          try {
            
            const { data, error } = await supabase
              .from('bootcampfeedback') 
              .insert([
                {
                  name: values.name,
                  email: values.email,
                  id: values.id,
                  whatsappNumber: values.whatsappNumber,
                  feedbackMessage: values.feedbackMessage,
                },
              ]);
        
            if (error) {
              console.error('Error inserting data:', error);
            } else {
              console.log('Data inserted successfully:', data);
              // Redirect to a success page or perform any other action
              setFormSubmitted(true)
              router.push('/feedbacksuccesfull')
            }
          } catch (error) {
            console.error('An error occurred:', error);
            router.push('/notsubmitted')
          }
        },
        
        
      });
    
    
    
  return (
    <>
    <title>Feedback Form of Android Development Bootcamp of NSCC KIET | Technical Club Of KIET</title>
    
    <div className='max-w-screen-sm mx-auto my-5'>
    <h2 className="max-w-lg  mx-3 mb-6 font-sans text-3xl  font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
            <span className="relative inline-block">
            
              <span className="relative">Feedback<span className='text-blue-700'> Form</span> </span>
            </span>{' '}
            
          </h2>
      <form onSubmit={formik.handleSubmit} className='mx-2'>
      
        <Input className="mt-4" value="name" label="Enter your Name" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />
      
        <Input value="email" label="Your Email" placeHolder="dhruv.2125cs1130@kiet.edu" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email"/>

        <Input className="mt-4" value="id" label="Enter your Library ID" placeHolder="2125cs1130" formikTouched={formik.touched.id} formikError={formik.errors.id} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.id} type="text" />
    
        <Input value="whatsappNumber" label="Whatsapp Number" placeHolder="8088088088" formikTouched={formik.touched.whatsappNumber} formikError={formik.errors.whatsappNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.whatsappNumber} type="tel"/>

        <InputTextArea className="mt-4" value="feedbackMessage" label="Please provide the feedback" placeHolder="" formikTouched={formik.touched.feedbackMessage} formikError={formik.errors.feedbackMessage} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.feedbackMessage} type="text" />    
       

        <Button color='primary' type='submit'>Submit</Button>



      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="mx-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Feedback Status</ModalHeader>
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

      </form>
    </div>
    </>
  )
}

export default page
