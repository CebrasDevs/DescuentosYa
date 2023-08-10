import Userdetail from "@/components/Userdetail"

export default function userDetailPage({params}){
    const {userDetail} = params
    return(
        <div>
            <Userdetail id={userDetail}/>
        </div>
    )
}