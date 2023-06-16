import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson } from 'enzyme-to-json'

import Login from "../src/components/user/login";

let component: any

beforeEach(() => {
    component = shallow(<Login />)
})

describe('Given the Login component is rendered', () => {

    it('should render <h3>', () => {
        expect(component.find('h3').text()).toEqual('h3')
    })

    // describe('Snapshots', () => {

    //     it('should be as expected', () => {
    //         expect(shallowToJson(component)).toMatchSnapshot()
    //     })
    // })

    describe('Snapshots', () => {
        it('should be as expected', () => {
            expect(shallowToJson(component)).toMatchSnapshot()
        })
    })
})

// test('Submitting the form', () => {
//     const event = {target: {name: 'username', value: 'usertest'}}
//     const login = mount(<Login />)
//     const handleChange = jest.spyOn(login.instance(), 'handleChange')
//     login.update()
//     const userInput = login.find('.username')

//     userInput.simulate('change', event)
//     expect(handleChange).toBeCalled()
// })