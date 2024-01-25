import {createSlice} from '@reduxjs/toolkit';
const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    id: '65255a926eef9094a7d2f3fe',
    token: '',
    user: null,
    setIsSplash: true,
    userId: '65255a926eef9094a7d2f3fe',
    marker:[], 
    password:'',
    data:[]
  },
  reducers: {
    setUser: (state, action) => {
        console.log("setUser===", action.payload);
      state.user = action.payload;
    },

    setIsSplash: (state, action) => {
      state.setIsSplash = action.payload;
    },
    setMarkers: (state, action) => {
      state.marker = action.payload;
    },
    setEmailToken: (state, action) => {
        console.log("setEmailToken", action.payload);
        state.token = action.payload;
      },
      setpassword:(state , action)=>{
        console.log("setpassword", action.payload);
        state.password = action.payload
      },
      setData:(state , action)=>{
        state.data = action.payload
      }
  },
});

export const {setUser, setIsSplash,setMarkers,setEmailToken, setpassword, setData } = AuthSlice.actions;
export default AuthSlice.reducer;

