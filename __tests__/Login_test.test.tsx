

import LoginForm from '@/app/Login/LoginForm';
import {render, screen, fireEvent} from '@testing-library/react';


test('incorrect password returns login form with message saying password incorrect', async() => {
       render(<LoginForm   />)
       const messageDisplay = screen.getByText('message');
      
       expect(messageDisplay).toBe('message')


});



test('incorrect email returns login form with message saying user does not exist', () => {

});



test('no credentials filled returns login with message saying to fill out details', () => {

})