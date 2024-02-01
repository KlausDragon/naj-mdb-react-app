function Categories({currentSelectedCategory , setCurrentSelectedCategory}) {

    return (
        <div>
<button onClick={() => {
    setCurrentSelectedCategory("Popular")
}}>
        Popular
    </button>


<button onClick={() => {
    setCurrentSelectedCategory("Top Rated")
}}>Top Rated</button>

<button onClick={() => {
    setCurrentSelectedCategory("Upcoming")
}}>Upcoming</button>
<button>Now Playing</button>
        </div>
    )

}


export default Categories