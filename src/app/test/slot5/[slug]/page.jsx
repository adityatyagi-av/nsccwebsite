"use client"
import {CircularProgress,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { usePathname, useRouter} from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js';
import {Button, Spinner} from "@nextui-org/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20} from './ques';
import InputRadio from '@/components/inputRadio';


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const page = () => {
  const pathname = usePathname()
  const parts = pathname.split('/'); 
  const libraryid = parts[parts.length - 1]; 
  const [idDetails, setIDDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const router =useRouter();
  const [remainingTime, setRemainingTime] = useState(20 * 60); // Initial time in seconds (20 minutes)

  const updateRemainingTime = () => {
    setRemainingTime((prevTime) => {
      if (prevTime > 0) {
        return prevTime - 1;
      } else {
        // Call your submission function when the timer reaches 0
        formik.handleSubmit();
        return 0;
      }
    });
  };



  useEffect(() => {
    const fetchLibraryDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('slot5')
          .select('*')
          .eq('id', libraryid)
          .single();

        if (error) {
          console.error('Error fetching library details:', error.message);
        } else {
          if(data.score===null){
            setIDDetails(data || null);
          setLoading(false)
          }
          else{
            router.replace('/submitted')
          }
          
        }
      } catch (error) {
        console.error('Error fetching library details:', error.message);
      }
    };

    if (libraryid) {
      fetchLibraryDetails();
    }
    const timer = setInterval(updateRemainingTime, 1000); // Update every second

    // Clear the timer if the component unmounts or the form is submitted manually
    return () => clearInterval(timer);
  }, []);



  const validationSchema = Yup.object({
   
    ques1:Yup.string(),
    ques2:Yup.string(),
      ques3:Yup.string(),
      ques4:Yup.string(),
      ques5:Yup.string(),
      ques6:Yup.string(),
      ques7:Yup.string(),
      ques8:Yup.string(),
      ques9:Yup.string(),
      ques10:Yup.string(),
      ques11:Yup.string(),
      ques12:Yup.string(),
      ques13:Yup.string(),
      ques14:Yup.string(),
      ques15:Yup.string(),
      ques16:Yup.string(),
      ques17:Yup.string(),
      ques18:Yup.string(),
      ques19:Yup.string(),
      ques20:Yup.string(),
  });


  const formik = useFormik({
    initialValues: {
      ques1:"0",
      ques2:"0",
      ques3:"0",
      ques4:"0",
      ques5:"0",
      ques6:"0",
      ques7:"0",
      ques8:"0",
      ques9:"0",
      ques10:"0",
      ques11:"0",
      ques12:"0",
      ques13:"0",
      ques14:"0",
      ques15:"0",
      ques16:"0",
      ques17:"0",
      ques18:"0",
      ques19:"0",
      ques20:"0",
      
      
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      onOpen();
      const totalScore =
        Number(values.ques1) +
        Number(values.ques2) +
        Number(values.ques3) +
        Number(values.ques4) +
        Number(values.ques5) +
        Number(values.ques6) +
        Number(values.ques7) +
        Number(values.ques8) +
        Number(values.ques9) +
        Number(values.ques10) +
        Number(values.ques11) +
        Number(values.ques12) +
        Number(values.ques13) +
        Number(values.ques14) +
        Number(values.ques15) +
        Number(values.ques16) +
        Number(values.ques17) +
        Number(values.ques18) +
        Number(values.ques19) +1+
        Number(values.ques20);
  
      console.log(totalScore);
  
      try {
        const { data, error } = await supabase
          .from('slot5')
          .update({ score: totalScore })
          .eq('id', libraryid);
  
        if (error) {
          console.error('Error updating score:', error.message);
        } else {
          console.log('Score updated successfully:', data);
          setFormSubmitted(true)
          router.push('/succesfull')
          // Redirect or perform any other actions after successful update
        }
      } catch (error) {
        console.error('Error updating score:', error.message);
        router.push('/notsubmitted')
      }
    },
  });

  return (
    <div className='sm:mx-auto ml-6 mt-2  max-w-screen-md'>
      {loading ? (
        <div className='flex items-center justify-center'>
          <Spinner  label="Loading..." color="primary" size='lg' labelColor="primary"/>  
        </div>
        
      ) : (
        <>
        
        <div className='flex gap-4 py-2'>
          <h4 className='text-md text-gray-700 '>Name: <span className='text-blue-700'>{idDetails.name}</span></h4>
          <h4> Library ID: <span className='text-blue-700'>{idDetails.id}</span></h4>
          <h4 className="text-md  text-gray-700">
              Time remaining: <span className='text-blue-700'>{Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}
              </span>
            </h4>
          </div>
          <form onSubmit={formik.handleSubmit}>

          <InputRadio value="ques1" label="Q.1: Three numbers which are co-prime to each other are such that the product of the first two is 551 and that of the last two is 1073. The sum of the three numbers is:" options={question1} formikTouched={formik.touched.ques1} formikError={formik.errors.ques1} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
          
          <InputRadio value="ques2" label="Q.2: The father is three times older than Ronit, his son. He would be two and a half times Ronit's age after eight years. How many times, after another eight years, would he be Ronit's age?" options={question2} formikTouched={formik.touched.ques2} formikError={formik.errors.ques2} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques3" label="Q.3: 'I was as old as you are at the moment at the time of your birth,' a father told his son. If the father is currently 38 years old, the son was the following age five years ago:" options={question3} formikTouched={formik.touched.ques3} formikError={formik.errors.ques3} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques4" label="Q.4: Sameer and Anand are currently 5 years old and 4 years old, respectively. In three years, their ages will differ by 11 and 9, respectively. What is the current age in years of Anand?
" options={question4} formikTouched={formik.touched.ques4} formikError={formik.errors.ques4} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques5" label="Q.5: When Ayesha was born, her mother was 36 years old, and her father was 38 years old. Her brother was born four years younger than Ayesha. How much does her parent's age gap mean?" options={question5} formikTouched={formik.touched.ques5} formikError={formik.errors.ques5} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques6" label="Q.6: Abhay needs two hours longer than Sameer to reach a distance of 30 km. Should Abhay double his speed, he will finish in one hour instead of Sameer's. The pace of Abhay is:" options={question6} formikTouched={formik.touched.ques6} formikError={formik.errors.ques6} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques7" label="Q.7: Robert has estimated that he will arrive at point A at 2:00 PM while riding his bike. If he drives at ten kilometers per hour, he will arrive there at midday if he drives at fifteen. How fast has he have to go to get to A at 1 P.M.?
" options={question7} formikTouched={formik.touched.ques7} formikError={formik.errors.ques7} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


          <InputRadio value="ques8" label="Q.8: An individual on a trip covers the first 160 km at 64 km/h and the last 160 km at 80 km/h. Over the tour's first 320 kilometers, the average speed is:
" options={question8} formikTouched={formik.touched.ques8} formikError={formik.errors.ques8} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques9" label="Q.9: Solve the system of equations: (2x + 3y &= 12) and (4x - 2y &= 6)" options={question9} formikTouched={formik.touched.ques9} formikError={formik.errors.ques9} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques10" label="Q.10: A train travels from City A to City B at a speed of 60 km/h and returns at a speed of 75 km/h. If the total travel time is 8 hours, what is the one-way distance between the two cities?" options={question10} formikTouched={formik.touched.ques10} formikError={formik.errors.ques10} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques11" label="Q.11: The sum of three consecutive integers is 72. Find the integers.
" options={question11} formikTouched={formik.touched.ques11} formikError={formik.errors.ques11} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques12" label="Q.12: Solve the quadratic equation (3x^2 - 7x + 2 = 0).
" options={question12} formikTouched={formik.touched.ques12} formikError={formik.errors.ques12} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques13" label="Q.13:  If the area of a circle is equal to the area of a rectangle, and the radius of the circle is 7 cm, what is the length of the rectangle if its width is 6 cm? (Take ( pi = 22/7))
" options={question13} formikTouched={formik.touched.ques13} formikError={formik.errors.ques13} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques14" label="Q.14: The sum of the squares of two consecutive even integers is 340. Find the integers." options={question14} formikTouched={formik.touched.ques14} formikError={formik.errors.ques14} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques15" label="Q.15: If ( log_2 (x) + log_2 (x + 8) = 6 ), what is the value of  x ?" options={question15} formikTouched={formik.touched.ques15} formikError={formik.errors.ques15} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques16" label="Q.16: The product of two numbers is 72, and their sum is 18. Find the numbers.
" options={question16} formikTouched={formik.touched.ques16} formikError={formik.errors.ques16} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques17" label="Q.17: If \( tanA = 4/3), what is sinA=?
" options={question17} formikTouched={formik.touched.ques17} formikError={formik.errors.ques17} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques18" label="Q.18:  The cost price of an article is $800, and it is sold at a loss of 12.5%. What is the selling price?

" options={question18} formikTouched={formik.touched.ques18} formikError={formik.errors.ques18} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques19" label="Q.19: Solve for  x  in the equation 2/x+3/(x+1)= 1
" options={question19} formikTouched={formik.touched.ques19} formikError={formik.errors.ques19} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques20" label="Q.20: The sum of an infinite geometric series is 24, and the common ratio is 1/2. What is the first term of the series?
" options={question20} formikTouched={formik.touched.ques20} formikError={formik.errors.ques20} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  


          <Button color="primary" type='submit' >Submit</Button>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="mx-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">test Submission Status</ModalHeader>
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
          </>
      )}
    </div>
  )
}

export default page
