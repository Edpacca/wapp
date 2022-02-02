export function TabLink(props: {title: string, isActive: boolean, onClick: () => void}) {
    return(
        <div className={`tabLink ${props.isActive ? "activeLink" : ""}`}>
            <p onClick={props.onClick}
            >{props.title}</p>
        </div>
    )
}
