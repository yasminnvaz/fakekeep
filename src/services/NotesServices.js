import Axios from 'axios';

const URL_API = 'https://fake-keep-api.herokuapp.com/notes';

export const getAllNotes = async (pagination) => {
  const {data: notes} = await Axios.get(`${URL_API}${pagination}`);
  return notes;
};

export const createNote = async ({title, content}) => {
  const note = {title: title, note: content};
  const response = await Axios.post(URL_API, note);
};
