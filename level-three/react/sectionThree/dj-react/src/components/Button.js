export default function Button({names, onClick}) {

    return (
        <button onClick={onClick} className="buttons-style"
            
        >
            {names}
        </button>
    )
}