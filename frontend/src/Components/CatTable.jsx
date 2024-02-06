const CatTable = ({cats, onDelete,onUpdate}) => (
    <div className="CatTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Age</th>
          <th>Location</th>
          <th>Pic</th>
          <th>Breed</th>
          <th>Money</th>
          <th>Delete</th>
          <th>Update</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {cats.map((cat) => (
          <tr key={cat._id}>
            <td>{cat.name}</td>
            <td>{cat.sex}</td>
            <td>{cat.age}</td>
            <td>{cat.location}</td>
            <td><img src={cat.picture} width="100px"/></td>
            <td>{cat.breed}</td>
            <td>{cat.dollars}$</td>

            <td>
              <button type="button" onClick={() => onDelete(cat._id)}>
                Delete
              </button>
              <button type="button" onClick={() => onUpdate(cat)}>
                Update this
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CatTable;