import PropTypes from "prop-types";
import { Input, Text } from "../styles/styled";

function Filter({ filterHandler, filter }) {
  return (
    <div>
      <Text>Find contact by name</Text>
      <Input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
