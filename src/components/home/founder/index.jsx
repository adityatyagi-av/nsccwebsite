import React from 'react';

const Founder = () => {
    const FounderMember = [
        {
            id: 1,
            name: "Shikha Dixit",
            position: 'Ex - President',
            image: "https://media.licdn.com/dms/image/D4D03AQETYALwjBgBUA/profile-displayphoto-shrink_800_800/0/1691345596103?e=1718841600&v=beta&t=k7kB8lrN53jwLrqIowDnyquoYF2s2UHFoLyJtLV6N6o",
            linkedin: "https://www.linkedin.com/in/shixit/",
            link: '',
            github: '',
        },
        {
            id: 2,
            name: "Shaurya Awasthi",
            position: 'Ex - Vice President',
            image: "https://media.licdn.com/dms/image/D5635AQGMaWD_q3jDlg/profile-framedphoto-shrink_400_400/0/1714608760356?e=1715511600&v=beta&t=uQYE7H2NUgSg23EezXPwRgH6KWIDv0xqj0eHOeW_8-8",
            linkedin: "https://www.linkedin.com/in/shaurya007/",
            link: 'https://shaurya-eportfolio.netlify.app/',
            github: '',
        },
        {
            id: 3,
            name: 'Aditya Tyagi',
            position: 'President',
            image: 'https://media.licdn.com/dms/image/D4D03AQHwILiTLvOAvQ/profile-displayphoto-shrink_400_400/0/1684496714331?e=1720656000&v=beta&t=JDwyJ9yzr1iBhTWaAcppAx4CL3NZEDmAiNkCkhRoPlI',
            linkedin: 'https://www.linkedin.com/in/adityatyagiav/',
            github: 'https://github.com/adityatyagi-av',
            link:''
        },
        {
            id: 4,
            name: 'Dhruv Gajwani',
            position: 'Vice-President',
            image: 'https://media.licdn.com/dms/image/C5603AQEvS9KSB2Dh_w/profile-displayphoto-shrink_400_400/0/1653045841830?e=1720656000&v=beta&t=z3v2ftxE3hZ2FzApT4CjwOc63rBkSB9AV73CXP9kh-4',
            linkedin: 'https://www.linkedin.com/in/dhruv-gajwani-72346a23b/',
            link: '',
            github:''
        },
        {
            id: 5,
            name: 'Shreyansh Tiwari',
            position: 'General Secretary',
            image: 'https://media.licdn.com/dms/image/D4D35AQGru9bxX21t1Q/profile-framedphoto-shrink_400_400/0/1701150695322?e=1715515200&v=beta&t=X4BrfBUEZg-3vPA5ahjkFiuzDlCknMcni6m3Rbxe668',
            link: 'https://www.linkedin.com/in/shreyansh-tiwari-6b4976250/',
            linkedin: 'https://www.linkedin.com/in/shreyansh-tiwari-6b4976250/',
            github: '',
        },
         {
            id: 6,
            name: 'Nikita Jain',
            position: 'Ex- Technical Head',
            image: 'https://media.licdn.com/dms/image/D4E03AQGeyzos5CeT_w/profile-displayphoto-shrink_400_400/0/1708519845694?e=1720656000&v=beta&t=KhGtSEcocFIkhSuRhzVf0TfI5NtA_Q6EtaX_3SIJHEs',
            linkedin: 'https://www.linkedin.com/in/nikita-jain-975707213/',
            link: '',
            github:''
        },
        {
            id: 7,
            name: 'Sparsh Verma',
            position: 'Ex- Development Head',
            image: 'https://media.licdn.com/dms/image/D4D35AQFlvcS4mqmlfQ/profile-framedphoto-shrink_400_400/0/1695830174232?e=1715583600&v=beta&t=WsqZ1Zfnppx3LhWVGgauBZthej6wpjjd75LLmXzdkeo',
            linkedin: 'https://www.linkedin.com/in/sparshverma094/',
            link: '',
            github:''
        },
         {
            id: 8,
            name: 'Paras Tiwari',
            position: 'Ex- CP Head',
            image: 'https://media.licdn.com/dms/image/D5603AQGK2psKYX3dxA/profile-displayphoto-shrink_400_400/0/1713293012188?e=1720656000&v=beta&t=vsS_z2RCvJHrisNOD_NWbbA-xsiUfc4ibIIVlU6iBXU',
            linkedin: 'https://www.linkedin.com/in/paras-tiwari-3a78a9212/',
            link: '',
            github:''
        },
         {
            id: 9,
            name: 'Khushi',
            position: 'Ex- Graphics Head',
            image: 'https://media.licdn.com/dms/image/D4D35AQG7v7-xwGj7RA/profile-framedphoto-shrink_400_400/0/1698412317828?e=1715583600&v=beta&t=O9GeQ8e3XfB0y6TX-jsHBPSXuNYk6JvPQkxUUZtIbgk',
            linkedin: 'https://www.linkedin.com/in/khushi-gupta-624087271/',
            link: '',
            github:''
        },
         
    ];

    return (
        <section className="bg-white mx-auto max-w-screen-xl">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl "> Core Team
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-44 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-2 h-1 bg-blue-500 rounded-full"></span>
                    </div></h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {
                        FounderMember.map((member) => {
                            return (
                                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-500 rounded-xl">
                                    <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={member.image} alt="" />

                                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">{member.name}</h1>

                                    <p className="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">{member.position}</p>

                                    <div className="flex mt-3 -mx-2">
                                        <a href={member.link} className="mx-2 text-gray-600  hover:text-gray-500 group-hover:text-white" aria-label="Reddit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.033 6.966c.584.583.584 1.529 0 2.112l-7.955 7.956c-.583.583-1.529.583-2.112 0-.583-.583-.583-1.529 0-2.112l7.956-7.956c.582-.583 1.528-.583 2.111 0zm-9.138 13.386c-1.171 1.171-3.076 1.171-4.248 0-1.171-1.171-1.171-3.077 0-4.248l5.639-5.632c-1.892-.459-3.971.05-5.449 1.528l-2.147 2.147c-2.254 2.254-2.254 5.909 0 8.163 2.254 2.254 5.909 2.254 8.163 0l2.147-2.148c1.477-1.477 1.986-3.556 1.527-5.448l-5.632 5.638zm6.251-18.662l-2.146 2.148c-1.478 1.478-1.99 3.553-1.53 5.445l5.634-5.635c1.172-1.171 3.077-1.171 4.248 0 1.172 1.171 1.172 3.077 0 4.248l-5.635 5.635c1.893.459 3.968-.053 5.445-1.53l2.146-2.147c2.254-2.254 2.254-5.908 0-8.163-2.253-2.254-5.908-2.254-8.162-.001z" /></svg>
                                        </a>

                                        <a href={member.linkedin} className="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white" aria-label="Facebook">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </a>

                                        <a href={member.github} className="mx-2 text-gray-600 hover:text-gray-500  group-hover:text-white" aria-label="Github">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }







                </div>

            </div>
        </section>
    );
};

export default Founder;
