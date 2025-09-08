import './App.css'
import Gallery from './Gallery'

const person = {
    name: "Yifan Li",
    theme: {
        backgroundColor: "yellow",
        color: "red"
    }
};

export default function toDoList()
{
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Yifan Li";
    return (
        <div style={person.theme}>
            <h1>to do list of big scientist</h1>
            <img
                className='avatar'
                src={avatar}
                alt={description}
                        />
                        <Gallery></Gallery>
            <ul>
                <li>E=mc^2</li>
                <li>Ek = 1/2*m*v^2</li>
                <li>G = m*g</li>
            </ul>
        </div>
    )
}