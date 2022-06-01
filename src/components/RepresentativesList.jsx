
import Representative from "./Representative";

function RepresentativesList({reprList}) {
   
    return (
        reprList.map(item => <div>
            <Representative representative={item} />
        </div>)
    )
}

export default RepresentativesList
