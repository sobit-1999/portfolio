import { createSlice } from '@reduxjs/toolkit'

export const styleSlice = createSlice({
  name: 'style',
  initialState: {
    value: true,
    translateShow: true,
    translateIcon: [
      {icon: 'https://static.vecteezy.com/system/resources/previews/004/712/120/original/uzbekistan-flat-rounded-national-flag-icon-vector.jpg', name: 'UZB'},
      {icon: 'https://icon-library.com/images/english-icon-png/english-icon-png-12.jpg', name: 'EN'}
    ],
    translate: [

    ]
  },
  reducers: {
    dayNight: (state) => {  state.value = !state.value},
    translateShowFunc: (state) => {  state.translateShow = !state.translateShow}
   },
})

export const { dayNight, translateShowFunc } = styleSlice.actions

export default styleSlice.reducer
