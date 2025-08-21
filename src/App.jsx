import './App.css'
//import Gallery from './Gallery'

const person = {
    name: "Yifan Li",
    theme: {
        backgroundColor: "black",
        color: "pink"
    }
};

export default function toDoList()
{
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Yifan Li";
    return (
        <div style={person.theme}>
            <h1>to do list of {JSON.stringify(person)}</h1>
            <img
                className='avatar'
                src={avatar}
                alt={description}
            />
            <ul>
                <li>优化视屏电话</li>
                <li>准备航空学课程</li>
                <li>研究乙醇燃料引擎</li>
            </ul>
        </div>
    )
}