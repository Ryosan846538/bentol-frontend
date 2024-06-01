import { Route, Routes} from 'react-router-dom';
import React from "react";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/"/>
            <Route path="/home"/>
            <Route path="/menu"/>
            <Route path="/mypage"/>
        </Routes>
    );
}

export default AppRoutes;