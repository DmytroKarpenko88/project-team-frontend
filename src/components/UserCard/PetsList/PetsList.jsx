import React from 'react';
import { useSelector } from 'react-redux';
import { PetsListStyled, Title } from './PetsList.styled';
import PetsItem from '../PetsItem/PetsItem';
import { selectPets } from 'redux/pets/pets-selectors';

const PetsList = () => {
  // const [petsList, setPetsList] = useState([]);
  const data = useSelector(selectPets);

  // console.log('data:', data);

  return (
    <>
      {data && (
        <PetsListStyled>
          {data.pets.length === 0 && <Title>You didn't add pets yet.</Title>}
          {data.pets.length !== 0 &&
            data.pets.map(item => <PetsItem key={item._id} pet={item} />)}
        </PetsListStyled>
      )}
    </>
  );
};

export default PetsList;
