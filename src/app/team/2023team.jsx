import CoreTeam from "@/components/home/coreteam";
import { ThirdYear, SecondYear } from "./data";
import Founder from "@/components/home/founder";

export const Team = () => {


  return (
    <>
      <Founder />
      <CoreTeam />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"> Our Talented Team
            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-52 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-12 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-4 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>

        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {
            ThirdYear.map((member) => {
              return (
                <div key={member.id}>
                  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={member.imageUrl}
                      alt={member.name}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-1 text-lg font-bold text-gray-100">
                        {member.name}
                      </p>
                      <p className="mb-4 text-xs text-gray-100">{member.role}</p>
                      <p className="mb-4 text-xs tracking-wide text-gray-400">
                        {member.description}
                      </p>
                      <div className="flex items-center justify-center space-x-3">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          className="text-white bg-white transition-colors duration-300 "
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a
                          href={member.link}
                          target="_blank"
                          className="text-white bg-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 2c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6zm12.561 12l-1.2 6h-16.721l-1.2-6h19.121zm2.439-2h-24l2 10h20l2-10zm-1-5v3h-2v-1h-18v1h-2v-3h22z" /></svg></a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"> Our Talented Members
            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-64 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-12 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-4 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>
        </div>
        <div className="grid gap-10 mx-auto lg:max-w-screen-xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {SecondYear.map((member) => {
            return (
              <div key={member.id} className="flex flex-col items-center">
                <img
                  className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                  src={member.imageUrl}
                  alt={member.name}
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg mx-auto text-center font-bold">{member.name}</p>

                </div>
              </div>
            )
          })}


        </div>
      </div>

    </>
  );
};