import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, Paw, Plus } from 'components/icons';
import {
  ThirdStepFormComments,
  ThirdStepFormDiv,
  ThirdStepFormImgInput,
  ThirdStepFormImgPreview,
  // ThirdStepFormInput,
  ThirdStepFormPhotoDiv,
  ThirdStepFormPhotoTitle,
  ThirdStepFormPlus,
  ThirdStepFormTitle,
  // ThirdStepSexDiv,
  // ThirdStepSexFemaleLabel,
  // ThirdStepSexInput,
  // ThirdStepSexMaleLabel,
  ThirdStepSexPhotoDiv,
  // ThirdStepSexTitle,
} from './ThirdStepForm.styled';
import {
  AddPetBtnCancel,
  AddPetBtnCancelDiv,
  AddPetBtnItem,
  AddPetBtnList,
  AddPetBtnNext,
} from '../AddPetForm.styled';
import { validateField } from '../validatePet';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ThirdStepForm = ({ data, setData, submit, backStep }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [imageValue, setImageValue] = useState('');
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const isPetPhotoFieldValid = Boolean(!errors.petPhoto && !!data.petPhoto);
  const isCommentsFieldValid = Boolean(!errors.comments);
  const isLocationFieldValid = Boolean(!errors.location && !!data.location);
  const isSexFieldValid = Boolean(!errors.sex && !!data.sex);
  const isPriceFieldValid = Boolean(!errors.price && !!data.price);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (data.category === 'sell') {
      setIsDisabled(
        !(
          isPetPhotoFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isPriceFieldValid &&
          isCommentsFieldValid
        )
      );
    }
    if (data.category === 'pet') {
      setIsDisabled(!(isPetPhotoFieldValid && isCommentsFieldValid));
    } else {
      setIsDisabled(
        !(
          isPetPhotoFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isCommentsFieldValid
        )
      );
    }
  }, [
    errors,
    data.category,
    isCommentsFieldValid,
    isLocationFieldValid,
    isPetPhotoFieldValid,
    isPriceFieldValid,
    isSexFieldValid,
  ]);

  const handleChange = e => {
    // const input = e.target.name;
    // const value = e.target.value;
    // setData(prev => ({ ...prev, [input]: value }));
    const { name, value, type, files } = e.target;
    const fieldValue = type === 'file' ? files[0] : value;

    setErrors(prevState => ({ ...prevState, [name]: '' }));

    if (type === 'file') {
      setImageValue(value);
    }

    setData(prevState => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  return (
    <>
      <ThirdStepFormDiv>
        {/* sex for sell lostFond ingood hands*/}
        <ThirdStepSexPhotoDiv>
          {/* {data.option !== 'pet' && (
          <div>
            <ThirdStepSexTitle>The sex</ThirdStepSexTitle>
            <ThirdStepSexDiv>
              <ThirdStepSexFemaleLabel id="sex">
                <Female />
                <ThirdStepSexInput name="sex" type="radio" value="female" />
                Female
              </ThirdStepSexFemaleLabel>
              <ThirdStepSexMaleLabel id="sex">
                <Male />
                <ThirdStepSexInput name="sex" type="radio" value="male" />
                Male
              </ThirdStepSexMaleLabel>
            </ThirdStepSexDiv>
          </div>
        )} */}
          {/* --- */}
          {/* label */}
          <ThirdStepFormPhotoTitle htmlFor="pet-image" category={data.option}>
            <ThirdStepFormPhotoDiv>
              {data.option === 'pet' || viewportWidth < 768
                ? 'Add photo'
                : 'Load the pet’s image:'}
            </ThirdStepFormPhotoDiv>
            {/* div - svg */}
            <ThirdStepFormPlus>
              {/* <Plus /> */}
              {/* img */}
              {/* {fileInputRef.current?.files[0] && <img></img>} */}
              {!data.petPhoto && <Plus width="30" height="30" />}
              <ThirdStepFormImgPreview
                src={URL.createObjectURL(data.petPhoto)}
                alt={data.petPhoto.name}
                // alt="pet preview"
              ></ThirdStepFormImgPreview>
              {/* input */}
              <ThirdStepFormImgInput
                type="file"
                id="pet-image"
                alt="pet`s photo"
                // value={data.photo ?? ''}
                name="petPhoto"
                onChange={handleChange}
                // onFocus={focusHandle}
                value={imageValue}
                onBlur={() => validateField('petPhoto', data, setErrors)}
                accept=".jpeg, .png, .webp, .gif"
                required
              />
            </ThirdStepFormPlus>
          </ThirdStepFormPhotoTitle>
        </ThirdStepSexPhotoDiv>

        {/* location price for sell lostFond ingood hands*/}
        <div>
          {/* {data.option !== 'pet' && (
          <div>
            <ThirdStepFormTitle>
              Location
              <ThirdStepFormInput
                type="text"
                required
                name="location"
                placeholder="Type place of your living"
              />
            </ThirdStepFormTitle>

            <ThirdStepFormTitle>
              Price
              <ThirdStepFormInput
                type="text"
                required
                name="price"
                placeholder="How much does your pet cost?"
              />
            </ThirdStepFormTitle>
          </div>
        )} */}
          {/* ----- -------- */}
          <>
            <ThirdStepFormTitle htmlFor="comments">
              Comments
              <ThirdStepFormComments
                type="text"
                component="textarea"
                // value="comments"
                name="comments"
                placeholder="Type of pet"
                onChange={handleChange}
                // onFocus={focusHandle}
                value={data.comments}
                onBlur={() => validateField('comments', data, setErrors)}
                className={errors.comments ? 'invalid' : ''}
                required
              />
            </ThirdStepFormTitle>
            {!!errors.comments && <ErrorMessage message={errors.comments} />}
          </>
        </div>
      </ThirdStepFormDiv>
      <AddPetBtnList>
        <AddPetBtnItem>
          <AddPetBtnNext
            type="button"
            // text="Done"
            // icon={<Paw width="24" height="24" fill="#FEF9F9" />}
            filled={true}
            onClick={submit && (() => submit(false))}
            disabled={isDisabled}
          >
            Done
            {/* {step === 3 ? 'Done' : 'Next'} */}
            <Paw width="24" height="24" fill="#FEF9F9" />
          </AddPetBtnNext>
        </AddPetBtnItem>

        <AddPetBtnItem>
          {/* повернути на сторінку з якої прийшов з юзера або з find pet*/}
          <AddPetBtnCancel
            type="button"
            onClick={backStep}
            // text="Back"
            isLink={false}
          >
            {/* <Link to={backPage}> */}
            <AddPetBtnCancelDiv>
              <ArrowLeft width="24" height="24" />
              Back
              {/* {step === 1 ? 'Cancel' : 'Back'} */}
            </AddPetBtnCancelDiv>
            {/* </Link> */}
          </AddPetBtnCancel>
        </AddPetBtnItem>
      </AddPetBtnList>
    </>
  );
};

ThirdStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default ThirdStepForm;
