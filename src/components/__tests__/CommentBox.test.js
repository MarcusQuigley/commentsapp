import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';
 

let wrapped;

beforeEach(()=>{
    wrapped = mount(<CommentBox/>);
});

it('has a textbox and a button',()=>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in',()=>{
    const comment = 'some comment';
    wrapped.find('textarea').simulate('change',{
        target:{value:comment}
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual(comment);

});

afterEach(() => {
    wrapped.unmount(); 
});