export function TabLink(props: {title: string, onClick: () => void}) {
    return(
        <div className="tabLink">
            <p onClick={props.onClick}
            >{props.title}</p>
        </div>
    )
}