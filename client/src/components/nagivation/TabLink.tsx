export function TabLink(props: {title: string, isActive: boolean, onClick: () => void}) {
    return(
        <div className={`tabLink ${props.isActive ? "activeLink" : ""}`} onClick={props.onClick}>
            <p className='tabText'>{props.title}</p>
        </div>
    )
}
