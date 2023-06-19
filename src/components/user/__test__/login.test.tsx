import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson } from 'enzyme-to-json';
// import {}from 'jest'
import 'jsdom-global/register';
import Login from "../login";
// import Adapter from 'enzyme-adapter-react-15'
// let component: any=<></>

// beforeEach(() => {
//     component = shallow(<Login />);
// })

// describe('Given the Login component is rendered', () => {

//     it('should render <h3>', () => {
//         const component = shallow(<Login />);
//         expect(component.find('h3').text()).toEqual('h3');
//     })

//     describe('Snapshots', () => {

//         it('should be as expected', () => {
//             const component = shallow(<Login />);
//             expect(shallowToJson(component)).toMatchSnapshot();
//         })
//     })

//     // describe('Snapshots', () => {
//     //     it('should be as expected', () => {
//     //         expect(shallowToJson(component)).toMatchSnapshot()
//     //     })
//     // })
// })

test('Submitting the form', () => {
    const event = {target: {name: 'username', value: 'usertest'}};
    const login = shallow(<Login />);
    // const handleChange = jest.spyOn(login.instance(), 'handleChange')
    const handleChange = jest.fn();
    login.update();
    const userInput = login.find('.username');

    userInput.simulate('change', event);
    expect(handleChange).toBeCalled();
})