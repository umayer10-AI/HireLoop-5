import { redirect } from "next/navigation"
import toast from "react-hot-toast"
import { getUserToken } from "./session"

export const authHedaer = async() => {
    const token = await getUserToken()
    const header = {
        authorization: `Bearer ${token}`
    }
    return token ? header : {}
}

export const postData = async (v) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.insertedId){
        toast.success('data Added')
        redirect('/dashboard')
    }
    return data
}


export const actionPostCompanyData = async (v,path, method='POST') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`,{
        method: method,
        headers: {
            'content-type': 'application/json',
            ...await authHedaer()
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    if(data.insertedId){
        toast.success("data Successfully")
    }
    return data
}