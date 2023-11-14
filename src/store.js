import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "./redux/booklist"
import favoritereducer from "./redux/favorite";
export default configureStore({
    reducer:  {
        booklist: bookreducer,
        favorite: favoritereducer
    }
});