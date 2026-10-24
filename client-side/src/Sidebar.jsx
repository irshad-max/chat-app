import { useState } from "react";
import axios from "axios"
const SideBar_page = () => {
  const [text, setText] = useState("");
  const [SearchUser, setSeachUser] = useState([])
  const checkUser = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/search",
        {
          params: { text: text }
        }
      );
      setSeachUser(res.data)
    }
    catch (e) {
      console.log("error", e)
    }
  }
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>BAATCHIT</h2>
        </div>

        <div className="sidebar-search">
          <input type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} />
          <button className="search-btn" onClick={checkUser}>Search</button>
        </div>
        {
          SearchUser.map((user) => (
            <div key={user._id}>
              <p>ID: {user._id}</p>
              <p>Name: {user.name}</p>
              <img
                src={user.profileImage || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsQMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBBgcFAv/EADwQAAICAQIDBAYHBQkAAAAAAAABAgMEBREGITESUWGRMkFxgbHBBxMzYnKh0SIjQlJTFBUkQ2NzdJLw/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAUDBv/EAC0RAQACAgEDAwMDBAMBAAAAAAABAgMRBBIhMQVBURMiMjNxkSNhgdFCUrEU/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGHyA8nVeIcHTW65zdt39Otbte3uNGLjZMviOzxyZ6U7e7XcnjbN3f9mw6IR/1G5P8mjbT0+n/KWaeXb2hDXxzqEJfv8ADxrI/c7UPmy0+nY/ayI5lveHu6Txfp2oTVM28a9vZQt6Sfg+m/gY83CyYu/mGjHyKX7e7YYvdGRoZAAAAAAAAAAAAAAAAAAGH0A1rijW542+Fhz2va/bmv4F3e03cTjdf328MnJz9P218tSVTe7e7be736nU32052/l8zp5ExKFO6vwLxKVG6HU9KpbfwVxPZG6GmajY5Rm9qLZPnF/yt/Dy7jlc3iRr6mP/AC3cfPP42b+uhym1kAAAAAAAAAAAAAAAAAhy7442LdfP0aoOb9y3LUr1Wise6trdMTLmisnk3Tutbc7JOUjvxWKR0x7ONaeqdyvU1KSKTKqO+tImJQ87IiekJedeup6wlRm3F9qMtpLmmvUy+txqVo7d3Y+G9R/vXRMTMfpzhtP8Se0vzTPmuRj+llmrrYr9VIl6h4vQAAAAAAAAAAAAAAAAePxXOUeH8xp7cor3OSRo4sbzVeOf9KWgUT2SO3MOSv1XJIpMIfN1qYiB598z0iEvOvZ6wKVpdaHSfozm5cO2RfSOVNLyi/izhepR/X/xDo8X9Nt5gaQAAAAAAAAAAAAAAABR1nGeZpeXjx9KyqSj+Lbl+ex6Yb9GStvhTJXqpMOV12dlbNNNdUfReY240wsK7kV0MTu3Q0K1theIFO2ZeEqlkupeI2mHWuBcKWFwzixsi42W73ST+891+Wx85zcnXmmY9uzqcevTjhsJlewAAAAAAAAAAAAAAAAw+gHOOM9Gnp+ZLNpg3i3y3bS5VyfVe87XC5EZK9FvMf8Ajm8nF026o8NdVvLqb5hmYlcNCGdvInQr2TLRBD1uE9Cs13UoqcWsOmSd8+/7q8X8DLy+TXDj7eZ8f7e+HF12/s7DCKjFRikklskvUfOuo+gAAAAAAAAAAAAAAAAABHkUVZNM6b642VzW0oSW6aJiZrO4RMRMaloWucC3wnK3Rpqdb5/UWS2cfwvo/f5nVweo+2X+WLJxfejVcrS9TxZdm/T8mLXL7Nv4HQrnxW8WhmnFePMIq9N1LIn2KcDKm/8AakvkTObFXvNoIx2n2bHo3AWdlWRt1Waxaf6cZKVkvkvzMWb1KkRrH3lopxZn8nQ9PwMfTsWGNh1Rqqh0ivi+9nHve2S3Vedy21rFY1C0VWAAAAAAAAAAAAAAAAAAAA+X1Ajsvpq+1thD8UkiYrM+yOqPlivJosa+rvrn+GaYmtveEdUfKZdSFmQAAAAAAAAAAAAAAAAAAAjuthTXKy2cYQit3KT2SJiJmdQiZ1G5atqfGMIt16ZWrGuttnJL2L1m/FwJnvknTJk5cROqw13J1TUs77fLt7P8sX2V5I30wYqeIY75slvMqv1K67cz128mJUr1peQ2JcbUc7BaeNlWwS6R7bcfJ8jzvhx3/KHrXLeniXv6bxtKElXqlKaf+bUuntX6eRiy+n9t45aqcv2s27EyqcyiN2LbG2uXSUWc61bUnptGpbK2i0bhYKrAAAAAAAAAAAAAAAFbOzKMHGsyMmahXBb79/gvEtSk3t01VtaKxuXOda1nJ1m99vevHjL93Uvi+9ncwcauGvzPz/py82a2Sf7KtVZ7PFarp8CkyhL9Vt1I2IbIbFhVtXUvCVK0vAl0rWMvRspXYs94v7SqXoz9v6nnm49M1dWeuPLbHO4dR0TVsbWMKOTjS8JwfpQl3M+fzYbYb9FnUpeLxuHonmuAAAAAAAAAAAABhsDm3FmsvVc900y/wlDail0nL1y/Q7fDwRip1T5lzORl67ajxDzKYmqZZl6mC2R5zKF+mtMpMoZsSQFK5ovCVC1rmekJUbWXhKnay4u8N65ZoeqRvUpPHn+zfDvj3+1f+6nhyePGfHr39nthvOOduy0zhbXGyuSlCaUotPk0/WfNzGp1Lqx37vsAAAAAAAAAAAAPE4v1F6do1k65dm2391Br1N9X7luaeJi+pliJ8Q8c9+ijmdS22R35cldpPORdqaSKShajbsiukI7bd/WIgUrrC8QlSumekQlRtkXhKrZIunStOReEuo/Rnqjy9Gng2S3swmoxT/kfo+XNe44HqOLoy9UeJdDi36q6+G4nPaQAAAAAAAAAAw+gGgfSNlOedh4u/KuDm1v629vl+Z1vTafba/ywcy25iGsVM6UsS1XIpIsxsK6Q+3dyI0IbLS2hWttJ0lUssPSISqWzLJhWskWiEoXzLDafo4y/7NxLGpvaOTVKtrfluv2l8H5nP9Sp1YN/DRxraya+XW10OA6LIAAAAAAAAAAYHLOOpt8TXJ/w1wS8jvenxH0I/eXM5X6jxoS2Ncs6eFhWYQlVpGglaNCKdpOhXst3L6SrWWE6NK9ky0QtCFvcsMAerwrOUOJNNlHr9el5mflxE4L7+Hpin74dvXQ+YdVkAAAAAAAAAAAaTx/oN+TKGp4VbslCPZuhHq0ukkvX4nT4HJrT+neWPk4Zt90NCjPu5nXmGBJGzxA+vrBofLtGhHO0nRpFKwlOkE5kxCUTe5YYAbgbv9HfD19udDVsuqVePUt6O0vtJPluvBd5yvUeVXp+lWe8+WvjYp31y6bHocVuZAAAAAAAAAAAGGk+oGv61wlpupylaoPHyH1sq5b+1dGasPMy4u3mHhkwUv8Au07UOCdXxG5Y6rzK++t9mXk/kdPH6hht+XZktxbx47vDysHPxXtkYeRVt17Vb2+Brrlx2/GYeM47R5hRldHfZTR6xCvZ8ys39Y0lHKZOhG7F65RXvLak3Czj4OZlSUcbEvtb6dittHnbLSvmVorM+Ie7p3A2uZmztphi1vrK+XP/AKrn57GTJ6jhp47/ALPWvHvPns3PQ+BNM0+ULsvfNvjzTsW0E/CP67nMz+oZcnaO0NVONSvnu2xRSWyWy8DC0MgAAAAAAAAAAAAAAAMNJrZgQXYeNdytxqbF96tMtF7R4lExE+yrPQdIn6ek4EvbjQfyL/XzR4tP8q/Tp8MLQNHT3WkYCf8AxofoP/ozf9p/mT6dPhZpwMOn7HEx6/wVJFJvafMrRWI8QspJLkkvYVSyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"}
                alt={user.name}
                width="50"
              />
            </div>
          ))
        }
        <div className="sidebar-bottom">
          <div className="sidebar-item">Settings</div>
        </div>
      </div>
    </>
  );
};

export default SideBar_page;
