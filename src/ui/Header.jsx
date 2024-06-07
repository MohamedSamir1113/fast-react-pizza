import { Link } from "react-router-dom"
function Header() {
    return (
        <div>
            <Link to='/'>Fast react pizza</Link>
            <br />
            <Link to='/menu'>menu</Link>
            <br />
            <Link to='/cart'>cart</Link>
        </div>
    )
}

export default Header
