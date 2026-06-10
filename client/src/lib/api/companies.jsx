import { actionPostCompanyData } from "../action"
import { serverData } from "../allCompanies"
import { getUserSession } from "../session"

export const postCompanyData = async (v) => {
    return actionPostCompanyData(v,'/api/companies')
}

export const adminCompanies = async () => {
    return await serverData(`/api/companies`)
}

export const submitApplication = async (v) => {
    return actionPostCompanyData(v,'/api/applications')
}

export const updateCompany = async(id,v) => {
    return actionPostCompanyData(v,`/api/companies/${id}`,'PATCH')
}

export const getCompanyData = async (reqruiterId) => {
    return await serverData(`/api/my/companies?reqruiterId=${reqruiterId}`)
}

export const getLoggedReqruiter = async () => {
    const user = await getUserSession()
    return getCompanyData(user?.id)
}