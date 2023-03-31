import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({children}){
    const [UserInfo, setUserInfo] = useState({
        displayName: "",
        firstName: "",
        lastName: "",
        birthday: "",
        id: "",
        phoneNumber: "",
        email: "",
        password: ""
    })
    return(
        <DataContext.Provider value={[UserInfo, setUserInfo]}>
            {children}
        </DataContext.Provider>
    )
}