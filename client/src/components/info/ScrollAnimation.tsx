export function ScrollAnimation(props: { imageUrl: string }) {

    let lastKnownScrollPosition = 0;

    function move(event) {

    }

    document.addEventListener('scroll', move(e) {
        lastKnownScrollPosition = window.scrollY;
        
    })


    return(
        <div className="scroll-img-wrapper">
            <img src={props.imageUrl} alt=""></img>
        </div>    
    )
}
