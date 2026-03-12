"use client"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import SocialLink from "@/components/Partials/Footer/FooterLogoLinks/SocialLink";
import { useEffect, useState } from "react";
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";

function Icons() {
  const [socialLinks, setSocialLinks] = useState("")
  const axiosPublicInstance = useAxiosPublicInstance()

  useEffect(() => {
    async function homeData() {
      const { data } = await axiosPublicInstance.get('social-links');
      setSocialLinks(data?.data ?? data)
    }
    homeData();
  }, [axiosPublicInstance]);

  const getSocialLinks = (name) => socialLinks && socialLinks.length> 0 && socialLinks?.find(social => social.name === name)?.link || '';
  return (
    <div className="flex justify-center items-center gap-4 pt-6 md:pt-0">
          <SocialLink link={getSocialLinks("Facebook")} icon={FaFacebookF} />
          <SocialLink link={getSocialLinks("Twitter")} icon={FaTwitter} />
          <SocialLink link={getSocialLinks("Instagram")} icon={RiInstagramFill} />
          <SocialLink link={getSocialLinks("Linkedin")} icon={FaLinkedinIn} />
          <SocialLink link={getSocialLinks("Youtube")} icon={FaYoutube} />
        </div>
  )
}

export default Icons
