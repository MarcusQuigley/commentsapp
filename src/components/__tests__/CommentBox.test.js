import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';
 

let wrapped;
const textMessage = 'some text';

beforeEach(()=>{
    wrapped = mount(<CommentBox/>);
});

it('has a textbox and a button',()=>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', ()=>{
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target:{value:textMessage}
        });
        wrapped.update();
    })
    it('has a text area that users can type in',()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual(textMessage);

    });
    it('has text area that empties after submitting',()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual(textMessage);
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });
});
 
afterEach(() => {
    wrapped.unmount(); 
});