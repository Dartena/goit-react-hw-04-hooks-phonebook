import PropTypes from "prop-types";
import { Button, List, ListItem, TelLink, Text } from "../styles/styled";

function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <Text>
            {contact.name}:{" "}
            <TelLink href={"tel:" + contact.number}>{contact.number}</TelLink>
          </Text>
          <Button
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
