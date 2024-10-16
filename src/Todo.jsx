// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return (
//             <li>Task: {task} ✅</li>
//         )}
//         return (
//         <li>Task: {task} ❌</li>
//     )
// }

export default function Todo({ task, isDone }) {
    const TodoStyle = {
        textAlign:'start',
        backgroundColor:'lightgray',
        color:'black',
        margin:'15px',
        borderRadius:'5px',
        padding:'10px'
        
    }
        return (
        <li style={TodoStyle}>Task: {task} {isDone ? '✅' : '❌'}</li>
     )
}