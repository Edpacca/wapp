export function ColourBlock(props: {colour: string}) {
    return (
        <div className="colour-block" style={{backgroundColor: props.colour}}/>
    )
}