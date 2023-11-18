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
          .from('slot11')
          .select('*')
          .eq('id', libraryid)
          .single();

        if (error) {
          console.error('Error fetching library details:', error.details);
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
        console.error('Error fetching library details:', error);
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
          .from('slot11')
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

          <InputRadio value="ques1" label="Q.1: How many different ways are there to write the letters in the word KIET?" options={question1} formikTouched={formik.touched.ques1} formikError={formik.errors.ques1} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
          
          <InputRadio value="ques2" label="Q.2: Seated in a line facing westward are P, Q, R, S, and T. P and Q have a seat together. Sitting at the north end is S, and R at the south end. Q and R have a neighbor named T. In the middle, who is seated?" options={question2} formikTouched={formik.touched.ques2} formikError={formik.errors.ques2} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques3" label="Q.3: 2 , 12 , 36 , 80 , 150 , ?" options={question3} formikTouched={formik.touched.ques3} formikError={formik.errors.ques3} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques4" label="Q.4: Three daughters belong to Dev's family. The age of his girls is a question his friend Aditya wants to know. He receives a tip from Dev at first, and more hints from her till he guesses their age.
First hint: their ages added together equals 72.
Hint 2: The total of their ages is equal to Dev's house number.
Third hint: The eldest girl enjoys ice cream.
Aditya can make a prediction following 

the third indication. What's the age difference between the three daughters?
" options={question4} formikTouched={formik.touched.ques4} formikError={formik.errors.ques4} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques5" label="Q.5: Two trains are on same track and they are coming toward each other. The speed of the first train is 50 km/h and the speed of the second train is 70 km/h. A mosquito starts flying between the trains when the distance between two trains is 100 km. The mosquito first flies from first train to second train. Once it reaches the second train, it immediately flies back to the first train … and so on until trains collide. Calculate the total distance travelled by the mosquito. Speed of mosquito is 80 km/h" options={question5} formikTouched={formik.touched.ques5} formikError={formik.errors.ques5} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques6" label="Q.6: Someone works for you for five days, and you have an iron bar to pay them. You must give them an iron piece each day. To get one fifth of his daily income, how many minimum cuts to the iron bar do you have to make? " options={question6} formikTouched={formik.touched.ques6} formikError={formik.errors.ques6} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques7" label="Q.7: There is pizza that has been evenly sliced so that everyone of the 11 Indian players has a slice. return the bare minimum of cuts that are needed?" options={question7} formikTouched={formik.touched.ques7} formikError={formik.errors.ques7} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


          <InputRadio value="ques8" label="Q.8: You work as a pizza vendor. A boy gives you a note for 1000 rupees after buying you a pizza for 300. Since you are out of change, you borrow some from the nearby store and give it back to the boy. A few days later, the nearby store owner discovers that the note you gave him was phony and returns the money. How much of a loss must you suffer?
" options={question8} formikTouched={formik.touched.ques8} formikError={formik.errors.ques8} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques9" label="Q.9: How many hugs in total are there if five lads are in a room and they each give each other a single, brief hug?" options={question9} formikTouched={formik.touched.ques9} formikError={formik.errors.ques9} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques10" label="Q.10: Instead of using 12 divisions, the conventional clock now uses 16. Using the hour hand needle at eight and the minute hand needle at twelve, determine the standard time." options={question10} formikTouched={formik.touched.ques10} formikError={formik.errors.ques10} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques11" label="Q.11: CMM, EOO, GQQ, _____, KUU" options={question11} formikTouched={formik.touched.ques11} formikError={formik.errors.ques11} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques12" label="Q.12: ELFA, GLHA, ILJA, _____, MLNA" options={question12} formikTouched={formik.touched.ques12} formikError={formik.errors.ques12} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques13" label="Q.13: In 36 seconds, a train passes a station platform; in 20 seconds, a guy is standing there. What is the platform's length if the train is traveling at 54 km/h?" options={question13} formikTouched={formik.touched.ques13} formikError={formik.errors.ques13} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques14" label="Q.14: A man standing on the platform is crossed by two trains traveling in opposing directions in 27 and 17 seconds, respectively, and they cross each other in 23 seconds. Their speed ratio is as follows:" options={question14} formikTouched={formik.touched.ques14} formikError={formik.errors.ques14} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques15" label="Q.15: Examine these series: (1/2), (1/4), 2, 1,... Which number need to appear next?" options={question15} formikTouched={formik.touched.ques15} formikError={formik.errors.ques15} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques16" label="Q.16: Examine the following series: 36, 34, 30, 28, 24,... Which number need to appear next?" options={question16} formikTouched={formik.touched.ques16} formikError={formik.errors.ques16} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques17" label="Q.17: Examine these series: 47, 27, 27, 53, 40, 40, 27... Which number need to appear next?" options={question17} formikTouched={formik.touched.ques17} formikError={formik.errors.ques17} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques18" label="Q.18: Eric is younger than Tanya.Tanya is younger than Cliff.Cliff is younger than Eric. The third assertion is true if the first two are.
" options={question18} formikTouched={formik.touched.ques18} formikError={formik.errors.ques18} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  
          <InputRadio value="ques19" label="Q.19: Strawberries are less expensive than blueberries.
Raspberries are more expensive than blueberries.
Blueberries and strawberries are less expensive than raspberries.
The third assertion is true if the first two are.
" options={question19} formikTouched={formik.touched.ques19} formikError={formik.errors.ques19} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ques20" label="Q.20: A can do a task by themselves in six days, while B can accomplish it in eight. A and B agreed to do it for the sum of Rs. 3200. In three days, they finished the task with C's assistance. What amount is due to C?" options={question20} formikTouched={formik.touched.ques20} formikError={formik.errors.ques20} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
  


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
