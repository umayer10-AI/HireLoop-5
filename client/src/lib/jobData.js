export const getJobsData = async(query) => {
    let res;
    if(query){
        res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/jobs/browser?${query}`)
    }
    else{
        res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/jobs/browser`)
    }
    console.log(query)
    return res.json()
}

export const getJobsIdData = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/jobs/browser/${id}`)
    return res.json()
}