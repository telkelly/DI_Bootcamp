import { useParams } from "react-router-dom"

const Home = (props) => {
    const params = useParams()
    console.log(params);
    return (
        <h1>Home</h1>
    )
}

export default Home