import "./dropdown.css"
import edit from "../assets/edit.png";
import deletepng from "../assets/delete.png";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="edit">
        <img src={edit} alt="edit" />
        <h3>Edit</h3>
      </div>
      <div className="delete">
        <img src={deletepng} alt="delete" />
        <h3>Delete</h3>
      </div>
    </div>
  )
}

export default Dropdown
