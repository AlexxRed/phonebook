import { useEffect } from 'react';
import { List, ButtonDelete, ItemList, ContactName, ContactNumber } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getContacts, getFilterValue } from '../../redux/contactsSlice';
import { fetchAllContacts, deleteContactApi } from '../../redux/contactsOperations';



const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilterValue);

  const isLoading = false;

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const visibleContacts = useMemo(
    () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(el =>
        el.name.toLowerCase().includes(normalizedFilter)
      );
    }, [contacts, filter]);
    

  const deleteContact = id => {
    dispatch(deleteContactApi(id))
  };

  return (
    // <p>list</p>
    <List>
    {isLoading && <Loader/>}
    {visibleContacts.length === 0 && <h3>...oops has no contacts :(</h3>}
    {visibleContacts.map(({ id, name, number, phone }) => (
      <ItemList key={id}>
        <p>
          <ContactName>{name}:</ContactName>
          <ContactNumber href={`tel:${number??phone}`}>{number??phone}</ContactNumber>
        </p>
        <ButtonDelete type="button" onClick={() => deleteContact(id)}>
          Delete
        </ButtonDelete>
      </ItemList>
    ))}
  </List>
);
}

export default ContactList;