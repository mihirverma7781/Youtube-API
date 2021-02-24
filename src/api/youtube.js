import axios from 'axios';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
                    part:'snippet',
                    maxResults:5,
                    key:'AIzaSyBLcuhBgI9beVP69V-vT6Y2YhxzjXzh8UQ'

    }
})