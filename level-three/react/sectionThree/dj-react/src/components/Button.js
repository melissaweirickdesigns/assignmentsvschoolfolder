export default function Button({names, onClick}) {

    return (
        <button onClick={onClick}
            
        >
            {names}
        </button>
    )
}