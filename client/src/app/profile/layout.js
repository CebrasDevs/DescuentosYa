import CompanyProfile from "@/components/CompanyProfile";
import UserProfile from "@/components/UserProfile";
import Link from "next/link";
import {FaUserEdit} from "react-icons/fa"

export default function profileView() {


  return (
    <div>
      <UserProfile/>
      <CompanyProfile/>
    </div>
  );
}
