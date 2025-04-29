
import Axios from "axios"
import { BASE_URL } from "../../utils/url"
// import { getUserFromStorage } from "../../utils/getUserFromStorage"



// const token = getUserFromStorage()

export const loginAPi = async({email, password}: {email:string, password: string})=> {
    const response = await Axios.post(`${BASE_URL}/admin/login`, {
        email,
        password
    })
    // returnt the promise
    return response.data
}

// get basic info
export const getBasicInfo = async()=> {
    const response = await Axios.get(`${BASE_URL}/admin/getBasicInfo`)
    return response.data
}


// list all teachers
export const ListTeachersAPI = async({gender, department}: {gender: string, department: string})=> {
    const response = await Axios.get(`${BASE_URL}/admin/teachers`, {
        params: {gender, department}
    });
    return response.data
}

// list all teachers
export const ListStudentsAPI = async({gender, department}: {gender: string, department: string})=> {
    const response = await Axios.get(`${BASE_URL}/admin/students`, {
        params: {gender, department}
    });
    return response.data
}

// List all departments
export const ListAllDepartmentsAPI = async()=> {
    const response = await Axios.get(`${BASE_URL}/admin/department/allDepts`);
    return response.data
}

// Create Department
export const CreateDepartmentAPI = async({name, description, profileImage, code}: {name: string, description: string,profileImage: string,code: string})=> {
    const response = await Axios.post(`${BASE_URL}/department/create-department`, {
        name,
        description,
        profileImage,
        code
    })
    return response.data
}

export const EditDepartmentAPI = async({deptId}: {deptId: string})=> {

        const response = await Axios.put(`${BASE_URL}/editDepartment/${deptId}`);
    return response.data
    }
    

export const GetSchoolCalenderAPI = async () => {
    const response = await Axios.get(`${BASE_URL}/admin/schoolCalender/all`);
    return response.data
}

export const AddSchoolEventsAPI = async({eventTitle, eventDesc, date}: {eventTitle: string,eventDesc: string, date:string })=> {
    const response = await Axios.post(`${BASE_URL}/admin/schoolCalender/create`, {
        eventTitle,
        eventDesc,
        date
    })
    return response.data
}
