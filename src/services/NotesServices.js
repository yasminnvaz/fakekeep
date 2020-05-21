import Axios from "axios"

const URL_API = "https://fake-keep-api.herokuapp.com"

export const getAllNotes = async (pagination) => {
    const { data: notes } = await Axios.get(`${URL_API}/notes${pagination}`)
    return notes
}