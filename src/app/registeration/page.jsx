
// "use client";
// import React, { useState } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Select from "react-select";
// import { createClient } from "@supabase/supabase-js";
// import Image from "next/image";
// import img from "../../../public/CodeRush2.0.png";
// import successImg from "../../../public/success.png";
// import errorImg from "../../../public/error.png";
// import loaderImg from "../../../public/loader.gif";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_NEW;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY_NEW;
// const supabase = createClient(supabaseUrl, supabaseKey);

// const validationSchema = Yup.object({
//   full_name: Yup.string().required("Full name is required"),
//   student_id: Yup.string().required("Student ID is required"),
//   college_email: Yup.string().email("Invalid email address").required("College email is required"),
//   department: Yup.object().required("Department is required"),
//   year_of_study: Yup.object().required("Year of study is required"),
//   phone_number: Yup.string()
//     .required("Phone number is required")
//     .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
//   preferred_programming_language: Yup.string().required("Preferred programming language is required"),
//   programming_experience: Yup.string().required("Programming experience is required"),
//   hacker_rank_id: Yup.string().required("HackerRank ID is required"),
// });

// const departmentOptions = [
//   { value: "cse", label: "CSE" },
//   { value: "it", label: "IT" },
//   { value: "cs", label: "CS" },
//   { value: "cseai", label: "CSE(AI)" },
//   { value: "cseaiml", label: "CSE(AIML)" },
//   { value: "csit", label: "CSIT" },
//   { value: "ece", label: "ECE" },
//   { value: "me", label: "ME" },
//   { value: "eee", label: "EEE" },
// ];

// const yearOptions = [
//   { value: "1st_year", label: "1st Year" },
//   { value: "2nd_year", label: "2nd Year" },
//   { value: "3rd_year", label: "3rd Year" },
//   { value: "4th_year", label: "4th Year" },
// ];

// const initialValues = {
//   full_name: "",
//   student_id: "",
//   college_email: "",
//   department: null,
//   year_of_study: null,
//   phone_number: "",
//   preferred_programming_language: "",
//   programming_experience: "",
//   hacker_rank_id: "",
// };

// function Registration() {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const onSubmit = async (values) => {
//     setLoading(true);
//     setSuccess(false);
//     setError(false);

//     const { data, error } = await supabase.from("CodeRush_2.0_registration").insert([
//       {
//         name: values.full_name,
//         cllg_id: values.student_id,
//         kiet_email: values.college_email,
//         branch: values.department.value,
//         year: values.year_of_study.value,
//         number: values.phone_number,
//         preferred_language: values.preferred_programming_language,
//         experience: values.programming_experience,
//         hacker_rank_id: values.hacker_rank_id,
//       },
//     ]);

//     setLoading(false);

//     if (error) {
//       setError(true);
//     } else {
//       setSuccess(true);
//     }
//   };

//   return (
//     <div className="App">
//       <Image src={img} alt="poster" className="mb-12 sm:mb-14 md:16" />
//       <h1 className="text-center text-md sm:text-3xl font-bold sm:mb-14 mb-10">
//         Student Registration Form
//       </h1>
//       {loading && (
//         <div className="flex justify-center mb-6">
//           <Image src={loaderImg} alt="Loading..." width={50} height={50} />
//         </div>
//       )}
//       {success && (
//         <div className="text-center mb-6">
//           <Image src={successImg} alt="Success" width={50} height={50} />
//           <p className="text-green-500 font-semibold">Form submitted successfully!</p>
//         </div>
//       )}
//       {error && (
//         <div className="text-center mb-6">
//           <Image src={errorImg} alt="Error" width={50} height={50} />
//           <p className="text-red-500 font-semibold">Form not submitted. Try again!</p>
//         </div>
//       )}
//       {!loading && !success && (
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({ setFieldValue }) => (
//             <Form className="space-y-4 max-w-lg mx-auto p-6 border rounded-lg shadow-lg">
//               <div>
//                 <label htmlFor="full_name">Full Name</label>
//                 <Field type="text" id="full_name" name="full_name" className="w-full p-2 border rounded" />
//                 <ErrorMessage name="full_name" component="div" className="text-red-500" />
//               </div>

//               <div>
//                 <label htmlFor="student_id">Student ID</label>
//                 <Field type="text" id="student_id" name="student_id" className="w-full p-2 border rounded" />
//                 <ErrorMessage name="student_id" component="div" className="text-red-500" />
//               </div>

//               <div>
//                 <label htmlFor="college_email">College Email</label>
//                 <Field type="email" id="college_email" name="college_email" className="w-full p-2 border rounded" />
//                 <ErrorMessage name="college_email" component="div" className="text-red-500" />
//               </div>

//               <div>
//                 <label htmlFor="department">Department</label>
//                 <Select
//                   id="department"
//                   name="department"
//                   options={departmentOptions}
//                   onChange={(option) => setFieldValue("department", option)}
//                 />
//                 <ErrorMessage name="department" component="div" className="text-red-500" />
//               </div>

//               <div>
//                 <label htmlFor="year_of_study">Year of Study</label>
//                 <Select
//                   id="year_of_study"
//                   name="year_of_study"
//                   options={yearOptions}
//                   onChange={(option) => setFieldValue("year_of_study", option)}
//                 />
//                 <ErrorMessage name="year_of_study" component="div" className="text-red-500" />
//               </div>

//               <div>
//                 <label htmlFor="phone_number">Phone Number</label>
//                 <Field
//                   type="text"
//                   id="phone_number"
//                   name="phone_number"
//                   className="w-full p-2 border rounded"
//                 />
//                 <ErrorMessage name="phone_number" component="div" className="text-red-500" />
//               </div>

//               <div>
//                 <label htmlFor="preferred_programming_language">Preferred Programming Language</label>
//                 <Field
//                   type="text"
//                   id="preferred_programming_language"
//                   name="preferred_programming_language"
//                   className="w-full p-2 border rounded"
//                   placeholder="e.g., C++, Java, Python"
//                 />
//                 <ErrorMessage name="preferred_programming_language" component="div" className="text-red-500" />
//               </div>

//               <div>
//                 <label htmlFor="programming_experience">Programming Experience</label>
//                 <Field
//                   type="text"
//                   id="programming_experience"
//                   name="programming_experience"
//                   className="w-full p-2 border rounded"
//                 />
//                 <ErrorMessage name="programming_experience" component="div" className="text-red-500" />
//               </div>

//               <div>
//                 <label htmlFor="hacker_rank_id">HackerRank ID</label>
//                 <Field
//                   type="text"
//                   id="hacker_rank_id"
//                   name="hacker_rank_id"
//                   className="w-full p-2 border rounded"
//                 />
//                 <ErrorMessage name="hacker_rank_id" component="div" className="text-red-500" />
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       )}
//     </div>
//   );
// }

// export default Registration;














"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { Oval } from "react-loader-spinner";
import img from "../../../public/CodeRush2.0.png";
import successImg from "../../../public/success.png";
import errorImg from "../../../public/error.png";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_NEW;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY_NEW;
const supabase = createClient(supabaseUrl, supabaseKey);

const validationSchema = Yup.object({
  full_name: Yup.string().required("Full name is required"),
  student_id: Yup.string().required("Student ID is required"),
  college_email: Yup.string()
    .email("Invalid email address")
    .required("College email is required"),
  department: Yup.object().required("Department is required"),
  year_of_study: Yup.object().required("Year of study is required"),
  phone_number: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  preferred_programming_language: Yup.string().required(
    "Preferred programming language is required"
  ),
  programming_experience: Yup.string().required(
    "Programming experience is required"
  ),
  hacker_rank_id: Yup.string().required("HackerRank ID is required"),
});

const departmentOptions = [
  { value: "cse", label: "CSE" },
  { value: "it", label: "IT" },
  { value: "cs", label: "CS" },
  { value: "cseai", label: "CSE(AI)" },
  { value: "cseaiml", label: "CSE(AIML)" },
  { value: "csit", label: "CSIT" },
  { value: "ece", label: "ECE" },
  { value: "me", label: "ME" },
  { value: "eee", label: "EEE" },
];

const yearOptions = [
  { value: "1st_year", label: "1st Year" },
  { value: "2nd_year", label: "2nd Year" },
  { value: "3rd_year", label: "3rd Year" },
  // { value: "4th_year", label: "4th Year" },
];

const initialValues = {
  full_name: "",
  student_id: "",
  college_email: "",
  department: null,
  year_of_study: null,
  phone_number: "",
  preferred_programming_language: "",
  programming_experience: "",
  hacker_rank_id: "",
};

function Registration() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    setSuccess(false);
    setError(false);
  
    try {
      const { data: existingStudent, error: fetchError } = await supabase
        .from("CodeRush_2.0_registration")
        .select("id")
        .eq("kiet_email", values.college_email);
  
      if (fetchError) {
        throw fetchError;
      }
  
      if (existingStudent && existingStudent.length > 0) { 
        setError("You have already registered with this email.");
        setLoading(false);
        return;
      }
  
      const { data, error: insertError } = await supabase
        .from("CodeRush_2.0_registration")
        .insert([
          {
            name: values.full_name,
            cllg_id: values.student_id,
            kiet_email: values.college_email,
            branch: values.department.value,
            year: values.year_of_study.value,
            number: values.phone_number,
            preferred_language: values.preferred_programming_language,
            experience: values.programming_experience,
            hacker_rank_id: values.hacker_rank_id,
          },
        ]);
  
      if (insertError) {
        throw insertError;
      }
  
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error.message);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="App">
      <Image src={img} alt="poster" className="mb-12 sm:mb-14 md:16" />
      <h1 className="text-center text-md sm:text-3xl font-bold sm:mb-14 mb-10">
        Student Registration Form
      </h1>
      {loading && (
        <div className="flex justify-center mb-6">
          <Oval height={50} width={50} color="#4fa94d" visible={true} />
        </div>
      )}
      {success && (
        <div className="text-center mb-6 flex flex-col justify-center items-center">
          <Image src={successImg} alt="Success" width={50} height={50} />
          <p className="text-green-500 font-semibold">
            Form submitted successfully!
          </p>
        </div>
      )}
      {error && (
        <div className="text-center mb-6 flex flex-col justify-center items-center">
          <Image src={errorImg} alt="Error" width={50} height={50} />
          <p className="text-red-500 font-semibold">
          {error}
          </p>
        </div>
      )}
      {!loading && !success && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-4 max-w-lg mx-auto p-6 border rounded-lg shadow-lg">
             <div>
                 <label htmlFor="full_name">Full Name</label>
                 <Field type="text" id="full_name" name="full_name" className="w-full p-2 border rounded" />
                 <ErrorMessage name="full_name" component="div" className="text-red-500" />
               </div>

               <div>
                 <label htmlFor="student_id">Student ID</label>
                 <Field type="text" id="student_id" name="student_id" className="w-full p-2 border rounded" />
                 <ErrorMessage name="student_id" component="div" className="text-red-500" />
               </div>

               <div>
                 <label htmlFor="college_email">College Email</label>
                 <Field type="email" id="college_email" name="college_email" className="w-full p-2 border rounded" />
                 <ErrorMessage name="college_email" component="div" className="text-red-500" />
               </div>

               <div>
                 <label htmlFor="department">Department</label>
                 <Select
                  id="department"
                  name="department"
                  options={departmentOptions}
                  onChange={(option) => setFieldValue("department", option)}
                />
                <ErrorMessage name="department" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="year_of_study">Year of Study</label>
                <Select
                  id="year_of_study"
                  name="year_of_study"
                  options={yearOptions}
                  onChange={(option) => setFieldValue("year_of_study", option)}
                />
                <ErrorMessage name="year_of_study" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="phone_number">Phone Number</label>
                <Field
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage name="phone_number" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="preferred_programming_language">Preferred Programming Language</label>
                <Field
                  type="text"
                  id="preferred_programming_language"
                  name="preferred_programming_language"
                  className="w-full p-2 border rounded"
                  placeholder="e.g., C++, Java, Python"
                />
                <ErrorMessage name="preferred_programming_language" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="programming_experience">Programming Experience</label>
                <Field
                  type="text"
                  id="programming_experience"
                  name="programming_experience"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage name="programming_experience" component="div" className="text-red-500" />
              </div>

              <div>
                <label htmlFor="hacker_rank_id">HackerRank ID</label>
                <Field
                  type="text"
                  id="hacker_rank_id"
                  name="hacker_rank_id"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage name="hacker_rank_id" component="div" className="text-red-500" />
              </div>
              <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-gray-100 flex flex-col sm:flex-row items-center justify-between mb-10">
  {/* WhatsApp Icon */}
  <div className="flex items-center">
    <FaWhatsapp className="text-green-600 text-3xl" />
    <h2 className="ml-4 text-md sm:text-lg font-semibold text-gray-800">
      Join the CodeRush 2.0 WhatsApp Group
    </h2>
  </div>

  {/* Join Button */}
  <div className="mt-2 px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 text-center">
    <a
      href="https://chat.whatsapp.com/E1S272AtJba3f0hp89N3E4"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      Join Group
    </a>
  </div>
</div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default Registration;








// TO CHECK DATA IN SUPABASE

// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://txauxutvvkggkbafzypo.supabase.co';
// const supabaseKey = 'key';
// console.log(supabaseUrl, supabaseKey);
// const supabase = createClient(supabaseUrl, supabaseKey);

// async function fetchData() {
//   const { data, error } = await supabase
//     .from('CodeRush_2.0_registration') // Replace with your table name
//     .select('*'); // Replace '*' with specific columns if needed

//   if (error) {
//     console.error('Error fetching data:', error);
//   } else {
//     console.log('Data:', data);
//   }
// }

// fetchData();
