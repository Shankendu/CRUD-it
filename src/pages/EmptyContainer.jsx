import { NavLink } from "react-router-dom";
import "./emptyContainer.css";

const EmptyContainer = () => {
  return (
    <>
      <tr className="empty-container">
        <td colSpan="5">No Data to Show</td>
      </tr>
      <tr>
        <td className="create-btn" colSpan="5">
          <NavLink to="/create" id="createBtn" className="link">
            Create User
          </NavLink>
        </td>
      </tr>
    </>
  );
};

export default EmptyContainer;
