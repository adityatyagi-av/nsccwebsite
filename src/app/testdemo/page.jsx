"use client"
import * as React from 'react';


import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@nextui-org/react';




const steps = ['Important Details', 'ID Select','Test Start'];

export default function TestPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  
 

 

  const handleNext = () => {
   

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //validation Schema
  const validationSchema = Yup.object({
  



  });


  const formik = useFormik({
    initialValues: {
      name: '',
     
      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
      

    },
  });

 
  

  return (
    <div className='sm:mx-auto ml-6  max-w-screen-md'>
      <form onSubmit={formik.handleSubmit}>
        

        {activeStep === steps.length-1 &&
          <>
            <div className="mt-5 mb-4 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize mx-auto lg:text-3xl ">
                {`TEST`}
                </h1>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>

            </div>
            
            

           <div className='flex flex-wrap justify-around'>
           <Button color="primary"
                
                disabled={activeStep === 0}
                onClick={handleBack}
                
              >
                Back
              </Button>
              


              <Button color="primary" type='submit' >Finish</Button>
          
           </div>
              

            
          </>
        }



      {  activeStep === 0 && 
          
            <>
            <div className="mt-8"/>
          <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`Important Details`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
           
          




        
            <div className='flex flex-row justify-around'>
            <Button 
              
              disabled={activeStep === 0}
              onClick={handleBack}
             
            >
              Back
            </Button>
           
           

            <Button color="primary"
            onClick={handleNext}>

              { 'Next'}
            </Button>
            </div>
        </>
         }
        



        {activeStep === 1 && 
        
            <>
          <div className="mt-8"/>
          <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`Idea Description`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
            <div className='flex flex-row justify-around'>
            <Button 
              
              disabled={activeStep === 0}
              onClick={handleBack}
             
            >
              Back
            </Button>
           
           

            <Button color="primary"
            onClick={handleNext}>

              { 'Next'}
            </Button>
            </div>
          
        </>
         }
        
    </form>
  </div>
  );
}