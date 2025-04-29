type UserInfo = {
    token: string
}


export const getUserFromStorage = (): string | undefined => {
    const stored = localStorage.getItem("userInfo")

    if(!stored) return undefined
    try {
        
        const userInfo: UserInfo = JSON.parse(stored)
    
        return userInfo?.token
    } catch (error) {

        console.log("Failed to pasrse the user info from the localStorage",error)
        return undefined
    }
}