import {  mount } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../App";
import LandinPage from "../Components/Pages/LandinPage/LandinPage";
import Home from "../Components/Pages/Home/Home";
import Detail from "../Components/Pages/Detail/Detail";
import Form from "../Components/Pages/Forms/Form";


import nodeFetch from 'node-fetch';



describe('test <App/>', () => {
    global.fetch = nodeFetch

    let store
    const routes = ['/', '/home', '/home:id', '/addVG']

    const componentToUse = (route) => {
        return (
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );
    };


    describe('Los componentes deberian renderizar correctamente en su respectiva ruta', () => {
       it('El componente LandinPage deberia renderizar solamente en la ruta /', () => {
            const app = mount(componentToUse(routes[0])) 
            expect(app.find(LandinPage)).toHaveLength(1)
       })

       it('El componente Home deberia renderizar solamente en la ruta /home', () => {
            const app = mount(componentToUse(routes[1])) 
            expect(app.find(Home)).toHaveLength(1)
       })

       it('El comoponente Detail deberia renderizar solamente en la ruta /home/:id', () => {
            const app = mount(componentToUse(routes[2])) 
            expect(app.find(Detail)).toHaveLength(1)
       })

       it('El componente Form deberia renderizar solamente en la ruta /addVG', () => {
            const app = mount(componentToUse(routes[4])) 
            expect(app.find(Form)).toHaveLength(1)
       })
    })
})