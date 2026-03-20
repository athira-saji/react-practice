import Student from './Student.jsx'
function App() {
    return(
        <>
            <Student name="Alex" age={20} isStudent={true}/>
            <Student name="Taylor" age={41} isStudent={false}/>
            <Student name="Sara" age={50} isStudent={false}/>
            <Student name="Alice" age={23} isStudent={true}/>
        </>
    );
}

export default App
