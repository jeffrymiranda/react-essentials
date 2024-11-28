//Option #1
/*export default function TabButton(props) {
    return <li>
        <button>
            {props.label}
        </button>
    </li>
}*/

//The children prop here simply refers to the content between your component text.
//Option #2
export default function TabButton({children, isSelected, ...props}) {
    return <li>
        <button className={isSelected ? "active" : undefined} {...props}>
            {children}
        </button>
    </li>
}
