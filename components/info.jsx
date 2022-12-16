"use client"

import Image from "next/image"
import { useState } from "react"
import iconArrow from "../public/images/icon-arrow.svg"

const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function Warning() {
    return (
        <div className="font-bold text-custom-primary-softRed mt-2 md:ml-6 text-sm">
            Please provide a valid email
        </div>
    )
}

const IconError = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
        <g fill="none" fillRule="evenodd">
            <circle cx={12} cy={12} r={12} fill="#F96464" />
            <path
                fill="#FFF"
                fillRule="nonzero"
                d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
            />
        </g>
    </svg>
)

function Info() {

    const [warning, setWarning] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        const email = event.target.email.value

        if (!email.match(emailFormat)) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }

    const borderInput = warning ? "border-2 border-custom-primary-softRed" : "border border-custom-primary-red"

    return (
        <div className="text-center md:text-start px-8 md:pl-48 md:pr-36 h-full flex flex-col justify-center md:justify-start ">
            <h1 className="font-semibold text-5xl md:text-7xl tracking-[1rem] text-custom-neutral-red">
                <span className="font-light text-custom-primary-red">WE'RE </span>
                COMING SOON
            </h1>
            <p className="text-custom-primary-red mt-6 mb-10">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <form className={`w-full rounded-full flex items-center overflow-hidden ${borderInput}`} onSubmit={handleSubmit} noValidate>
                <input type="email" placeholder="Email Address" className=" w-full px-6 py-4 bg-transparent  placeholder:text-custom-primary-red/70 outline-none text-custom-neutral-red font-normal focus:bg-transparent active:bg-transparent" name="email" />
                {warning && <div className="mx-4">
                    <IconError />
                </div>}
                <button className="relative right-0 top-0 h-full px-8 md:px-12 rounded-full flex items-center justify-center bg-gradient-to-r from-custom-gradient-from2 to-custom-gradient-to2 hover:opacity-50 ">
                    <Image src={iconArrow} alt="iconarrow" className="scale-[1.5]" />
                </button>
            </form>
            {warning && <Warning />}
        </div>
    )
}

export default Info