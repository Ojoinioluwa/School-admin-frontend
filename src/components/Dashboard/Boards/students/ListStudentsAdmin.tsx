// import React from 'react'

import { IconButton } from "@mui/material"
import { CiFilter } from "react-icons/ci"

interface Teacher{
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  phone: string,
  address: string,
  subjectsTaught: string[]
}


function ListStudentsAdmin() {

  const teachers: Teacher[] = [
    {
      "firstName": "Michael",
      "lastName": "Johnson",
      "email": "mjohnson@example.com",
      "gender": "Male",
      "phone": "08123456780",
      "address": "10 Unity Street, Lagos",
      "subjectsTaught": ["Mathematics"]
    },
    {
      "firstName": "Sarah",
      "lastName": "Williams",
      "email": "swilliams@example.com",
      "gender": "Female",
      "phone": "08123456781",
      "address": "22 Adebayo Lane, Abuja",
      "subjectsTaught": ["English", "Literature"]
    },
    {
      "firstName": "Emeka",
      "lastName": "Okoro",
      "email": "eokoro@example.com",
      "gender": "Male",
      "phone": "08123456782",
      "address": "18 Umuahia Road, Enugu",
      "subjectsTaught": ["Biology"]
    },
    {
      "firstName": "Aisha",
      "lastName": "Bello",
      "email": "abello@example.com",
      "gender": "Female",
      "phone": "08123456783",
      "address": "5 Zaria Crescent, Kaduna",
      "subjectsTaught": ["Chemistry"]
    },
    {
      "firstName": "David",
      "lastName": "Smith",
      "email": "dsmith@example.com",
      "gender": "Male",
      "phone": "08123456784",
      "address": "8 Ocean Drive, Port Harcourt",
      "subjectsTaught": ["Physics"]
    },
    {
      "firstName": "Grace",
      "lastName": "Udoh",
      "email": "gudoh@example.com",
      "gender": "Female",
      "phone": "08123456785",
      "address": "3 Eket Road, Akwa Ibom",
      "subjectsTaught": ["Business Studies"]
    },
    {
      "firstName": "Kunle",
      "lastName": "Adebayo",
      "email": "kadebayo@example.com",
      "gender": "Male",
      "phone": "08123456786",
      "address": "19 Ring Road, Ibadan",
      "subjectsTaught": ["Economics"]
    },
    {
      "firstName": "Chidinma",
      "lastName": "Okafor",
      "email": "cokafor@example.com",
      "gender": "Female",
      "phone": "08123456787",
      "address": "7 Onitsha Ave, Anambra",
      "subjectsTaught": ["Civic Education"]
    },
    {
      "firstName": "Ibrahim",
      "lastName": "Usman",
      "email": "iusman@example.com",
      "gender": "Male",
      "phone": "08123456788",
      "address": "1 Bauchi Lane, Gombe",
      "subjectsTaught": ["History"]
    },
    {
      "firstName": "Ngozi",
      "lastName": "Chukwuma",
      "email": "nchukwuma@example.com",
      "gender": "Female",
      "phone": "08123456789",
      "address": "12 Nsukka Close, Imo",
      "subjectsTaught": ["Geography"]
    },
    {
      "firstName": "Tolu",
      "lastName": "Ogunleye",
      "email": "togunleye@example.com",
      "gender": "Male",
      "phone": "08123456790",
      "address": "23 Allen Avenue, Ikeja",
      "subjectsTaught": ["Computer Science"]
    },
    {
      "firstName": "Fatima",
      "lastName": "Abubakar",
      "email": "fabubakar@example.com",
      "gender": "Female",
      "phone": "08123456791",
      "address": "14 Maiduguri Road, Borno",
      "subjectsTaught": ["Islamic Studies"]
    },
    {
      "firstName": "Segun",
      "lastName": "Adeola",
      "email": "sadeola@example.com",
      "gender": "Male",
      "phone": "08123456792",
      "address": "17 Ogudu Street, Lagos",
      "subjectsTaught": ["Accounting"]
    },
    {
      "firstName": "Joy",
      "lastName": "Nwosu",
      "email": "jnwosu@example.com",
      "gender": "Female",
      "phone": "08123456793",
      "address": "5 Aba Road, Abia",
      "subjectsTaught": ["Agricultural Science"]
    },
    {
      "firstName": "Henry",
      "lastName": "Ikechukwu",
      "email": "hikechukwu@example.com",
      "gender": "Male",
      "phone": "08123456794",
      "address": "20 Benin Avenue, Edo",
      "subjectsTaught": ["Basic Technology"]
    },
    {
      "firstName": "Patricia",
      "lastName": "Omolola",
      "email": "pomolola@example.com",
      "gender": "Female",
      "phone": "08123456795",
      "address": "6 Ijebu Ode Rd, Ogun",
      "subjectsTaught": ["French"]
    },
    {
      "firstName": "Samuel",
      "lastName": "Okon",
      "email": "sokon@example.com",
      "gender": "Male",
      "phone": "08123456796",
      "address": "9 Eket Close, Akwa Ibom",
      "subjectsTaught": ["Christian Religious Studies"]
    },
    {
      "firstName": "Lilian",
      "lastName": "Igwe",
      "email": "ligwe@example.com",
      "gender": "Female",
      "phone": "08123456797",
      "address": "11 Owerri Bypass, Owerri",
      "subjectsTaught": ["Home Economics"]
    },
    {
      "firstName": "Ahmed",
      "lastName": "Sule",
      "email": "asule@example.com",
      "gender": "Male",
      "phone": "08123456798",
      "address": "30 Ilorin Road, Kwara",
      "subjectsTaught": ["Social Studies"]
    },
    {
      "firstName": "Peace",
      "lastName": "Onwuka",
      "email": "ponwuka@example.com",
      "gender": "Female",
      "phone": "08123456799",
      "address": "15 Calabar Road, Cross River",
      "subjectsTaught": ["Government"]
    }
  ]
  
  return (
    // overal div
    <div className="h-[100vh] bg-white m-3 rounded-lg flex flex-col p-3 gap-4">
      {/* div for the actions section */}
      <div className="w-full h-[10vh] bg-stone-50 rounded-lg flex justify-between p-3 items-center">
        <h4 className="text-2xl font-bold text-gray-800">All Teachers List</h4>
        <div className="flex gap-3">
          <input type="search" className="outline-0 border rounded-2xl border-gray-300 text-sm w-[20vw] px-2" placeholder="Search by name, subject or Id"/>
          <IconButton sx={{bgcolor: "#fee685"}} >
            <CiFilter />
          </IconButton>
          <IconButton sx={{bgcolor: "#fee685"}} >
            <CiFilter />
          </IconButton>
          <IconButton sx={{bgcolor: "#fee685"}} >
            <CiFilter />
          </IconButton>
          
        </div>
      </div>

      {/* div for the listing of teachers */}
      <div className="scroll w-full h-[85vh] rounded-lg overflow-y-scroll scroll-smooth scrollbar-hide">

        <ul className="w-full h-full  ">
          <li className="bg-blue-100 w-full p-4 flex justify-around items-center">
            <input type="checkbox" />
            <div className="w-[20%]">Full Name</div>
            <div className="w-[22%]">Email</div>
            <div className="w-[5%] ">Gender</div>
            <div className="w-[10%]">Phone</div>
            {/* <div className="w-[15%]">Address</div> */}
            <div className="w-[10%]">Subject</div>
            <div className="w-[10%]">Actions</div>
          </li>
          {teachers.map((teacher, index)=> (
            <li key={index} className="border-t border-gray-500 flex justify-around items-center p-4 hover:bg-purple-200 cursor-pointer">
              <input type="checkbox" />
            <div className="w-[20%]">{`${teacher.gender === "Male" ? "Mr." : "Mrs."} ${teacher.firstName} ${teacher.lastName}`}</div>
            <div className="w-[22%]">{teacher.email}</div>
            <div className="w-[5%]">{teacher.gender}</div>
            <div className="w-[10%] ">{teacher.phone}</div>
            {/* <div className="w-[15%]  text-wrap">{teacher.address}</div> */}
            <div className="w-[10%]  text-wrap">{teacher.subjectsTaught[0]}</div>
            <div className="w-[10%] ">Actions</div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default ListStudentsAdmin
