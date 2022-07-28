import { Outlet, Route, Routes } from "react-router-dom"
import { WantToRead } from "../books/WantToRead"
import { CompletedBooks } from "../books/CompletedBooks"


export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Welcome to the Book Society!</h1>
                    <div>A place where you can commune with your books</div>

                    <Outlet />
                </>
            }>

               
                <Route path="/CompletedBooks" element={ <CompletedBooks /> } />
                <Route path="/WantToRead" element={ <WantToRead /> } />
              
            </Route>
        </Routes>
    )
}