"use client"
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

function ContactDetails() {
  return (
    <div className="">
      <h1 className="">Contact us</h1>
      <p className="contact_details pt-6 pb-12">
        {`We'd`} love to hear from you! Whether you have questions about our films, need assistance with tickets, or want to collaborate, feel free to reach out to us.
      </p>
      <div className="grid grid-cols-1">
        <div className="flex justify-start items-center gap-6">
          <MdEmail className="contact" />
          <div>
            <p className="contact_info">Email</p>
            <Link href="mailto:info@bongozfilms.com" className="contact_infos text-white">info@bongozfilms.com</Link>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 py-10">
          <MdCall className="contact" />
          <div>
            <p className="contact_info">Phone</p>
            <Link href="tel:+61406063058" className="contact_infos text-white">+61 406 063 058</Link>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6">
          <MdLocationPin className="contact" />
          <div>
            <p className="contact_info">Location</p>
            <p className="contact_infos">Denham Court, NSW 2565, Australia</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactDetails