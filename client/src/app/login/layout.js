import styles from "../../styles/Layout.module.css";

export default function Layout({ children }) {

    return (
        <div className="flex h-screen bg-slate-200">
            <div className="right flex flex-col justify-evenly text-black m-auto bg-slate-50 rounded-md w-1/3">
                <div className="text-center py-10">
                    {children}
                </div>
            </div>
        </div>
    )
}