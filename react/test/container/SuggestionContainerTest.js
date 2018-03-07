import ComboContainer from '../../src/makeCombo/ComboContainer';
import ComboForm from '../../src/makeCombo/ComboForm';

describe('ComboContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ComboContainer />);
  });

  it('should should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({
      genre: 'none',
      topping_1: 'none',
      topping_2: 'none',
      queryString: ''
    });
  });

  it('should render a ComboForm Component', () => {
    expect(wrapper.find(ComboForm)).toBePresent();
  });

  it('should render the ComboForm Component an onChange function', () => {
    expect(wrapper.find(ComboForm).props()).toEqual({
      handleChangeGenre: jasmine.any(Function),
      handleChangeTopping1: jasmine.any(Function),
      handleChangeTopping2: jasmine.any(Function)
    });
  });
});
