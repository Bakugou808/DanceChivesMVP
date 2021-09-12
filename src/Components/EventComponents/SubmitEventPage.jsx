import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import ImageUpload from '../../utils/ImageUpload'
import EventForm from '../Forms/EventForm'

const SubmitEventPage = (props) => {
  const history = useHistory();

  return (
    <EventForm /> 
  );
};

export default SubmitEventPage;
