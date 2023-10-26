"use client"
import React from 'react';
import Image from 'next/image';

const Resume = () => {
    const handleClick = () => {
        // Replace 'path_to_resume.pdf' with the actual path to your resume file
        window.open('/path_to_resume.pdf', '_blank');
    };

    return (
        <div className="w-fit flex flex-col gap-8 px-8 h-fit">

            <div className="flex flex-col flex-wrap p-0 w-fit">
                <p className="w-fit flex text-[1.5em] font-bold">Mercy Oluwatumininiu Kolapo</p>
                <p className="w-1/3">is a versatile product designer, improving web 3.0 experience</p>
            </div>

        <div className="cursor-pointer w-fit" onClick={handleClick}>
         
                    <Image src="/myresume.svg" alt="Resume" width={200} height={40} className="" />
            
        </div>
        </div>
    );
};

export default Resume;
