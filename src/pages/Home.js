import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function Home(){
    const {user}=useSelector(state=>state.auth)
    if (user){
        return(
            <div>
                <h1>HOŞGELDİNİZ
                </h1>
            </div>
        )
    }
    return(
        <div>
            <Link to="/register">Kayıt Ol</Link>
            <Link to="/login">Giriş Yap</Link>
        </div>
    )
}