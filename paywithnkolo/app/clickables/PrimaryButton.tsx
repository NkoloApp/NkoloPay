"use client"
import Link from 'next/link';


export default function PrimaryButton({params}:{params:{link:string,text:string}}) {
      return (
        <div className={`loginButton font-regular text-xl flex flex-col justify-center items-center nk-bg-primary rounded px-6 py-2`}>
          <Link href={params.link}>
            <span className='nk-tx-light nk-tx'>{params.text}</span>
        </Link>
      </div>
    );
}