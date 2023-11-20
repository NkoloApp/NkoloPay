"use client"
import Link from 'next/link';


export default function AccentButton({ params }: { params: { text: string, link :string } }){
    return <div className="sigupButton flex flex-col justify-center items-center">
        <Link href={params.link} className='flex flex-row justify-center items-center gap-1'>
            <span className='nk-tx-accent nk-tx-accent'>{params.text}</span>
            <img src="/arrowright.svg" alt="" className="arrow" />
        </Link>
    </div>
}