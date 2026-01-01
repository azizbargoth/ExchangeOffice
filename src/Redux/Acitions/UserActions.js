
export const AddUser='addUser';
export const UpdatePassword='updatePass'


//////////action creaters

export const AddUserType=()=>{
        return {
            type:AddUser,
        }}

export const UpdatePasswordType=(pass)=>{
            return {
                type:UpdatePassword,
                newPassword:pass
            }}

