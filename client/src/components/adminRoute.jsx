import { useSelector } from "react-redux/es/hooks/useSelector"
import { Outlet, Navigate } from "react-router-dom"

export default function AdminRoute() {
    const { currentUser } = useSelector((state) => state.user)
    return currentUser && currentUser.userStateCode === "Admin" ? <Outlet /> : <Navigate to='/' />
}