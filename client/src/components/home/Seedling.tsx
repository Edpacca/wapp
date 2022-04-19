import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Seedling() {
    return (
        <div className="seedling">
        <FontAwesomeIcon icon={faSeedling} onClick={() => clickSeedling()} />
    </div>
    )
}

async function clickSeedling() {
        await sleep(3000).then(() => window.open("https://www.youtube.com/watch?v=YxjY_YTksKM&t=14s", '_blank'));
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}