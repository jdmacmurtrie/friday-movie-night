import React from 'react';
import Elephant from '../../src/components/Topping';
import { mount } from 'enzyme';

describe('Topping', () => {
  let toppings,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Topping
        topping='Cheese'
      />
    )
  })
})
