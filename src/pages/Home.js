import React from "react"
import HomeBackgroundImage from "../assets/HomeApartmentImage.jpeg"


const Home = () => {
  return (
    <>
      <div  style={{backgroundImage: `url(${HomeBackgroundImage})`}} className="home-background">
        <div className="welcome-box">
          <h1>Welcome!</h1>
          <p>Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.</p>
        </div>
      </div>
    </>
  )
}

export default Home